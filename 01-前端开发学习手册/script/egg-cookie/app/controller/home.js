'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        let count = ctx.cookies.get('count');
        count = count ? Number(count) : 0; //让cookie转为数字
        ctx.cookies.set('count', ++count); //计数
        ctx.body = '访问次数：' + count;


    }

}

module.exports = HomeController;