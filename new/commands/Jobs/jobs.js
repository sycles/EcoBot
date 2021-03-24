const { User } = require("../../modules/User")

module.exports = class {
    constructor() {
        this.cmd = 'jobs',
        this.aliases = ['alljobs']
    }

    async run(client, msg, args, guildPrefix) {
        var message = ``;
        var array = client.jobs.array().sort((a, b) => {return a.pay - b.pay});
        for (var item of array) {
            if (item.name == "Begger") continue;
            message += `${item.name} **-** $${item.pay} (${item.workRequirement} times)\n`
        }

        msg.channel.send({embed: {
            title: `Current Jobs 👷‍♂️`,
            description: `__Job Name **-** Payrate (Work Requirement)__\n\n${message}`
        }});
    }
}