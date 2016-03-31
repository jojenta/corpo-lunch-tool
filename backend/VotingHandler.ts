import * as schedule from 'node-schedule';
import * as socketIo from 'socket.io';

export class VotingHandler {
    private io: socketIo.io;
    private hour: number;
    private minute: number;

    constructor(io, config) {
        this.io = io;
        this.hour = config.votingFinished.hour;
        this.minute = config.votingFinished.minute;
        this.scheduleTask(this._getTimeBefore(5));
    }

    scheduleTask(date) {
        schedule.scheduleJob(this._buildScheduleRule(date.getHours(), date.getMinutes()), () => {
            var notif = {
                msg: 'Voting will close in 5 minutes'
            }
            this.io.emit('closing_votings', notif);
        });
        schedule.scheduleJob(this._buildScheduleRule(this.hour, this.minute), () => {
            var notif = {
                msg: 'Voting is now closed'
            }
            this.io.emit('voting_closed', notif);
        });
    }

    _buildScheduleRule(h, m) {
        var rule = new schedule.RecurrenceRule();
        rule.dayOfWeek = [0, new schedule.Range(1, 6)];
        rule.hour = h;
        rule.minute = m;

        return rule;
    }

    _getTimeBefore(minutes) {
        var currentDate = new Date();
        currentDate.setHours(this.hour);
        currentDate.setMinutes(this.minute);

        var newDate = new Date(currentDate);
        newDate.setMinutes(currentDate.getMinutes() - minutes);

        return newDate;
    }
}

