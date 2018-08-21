const superagent = require('superagent');
const cheerio = require('cheerio');

/**
 * 爬虫相关
 * 用的superagent 是http方面的库可以发起post和get请求
 */
const cheerioFun = () => {
	superagent.get('https://cnodejs.org/')
		.end((err, res) => {
			if (err) { return err; }

			const $ = cheerio.load(res.text);
			const items = [];
			$('#topic_list .topic_title').each((idx, element) => {
				const $element = $(element);
				items.push({
					title: $element.attr('title'),
					href: 'https://cnodejs.org' + $element.attr('href'),
				});
				console.log(items);
			});
		});
};

cheerioFun();
