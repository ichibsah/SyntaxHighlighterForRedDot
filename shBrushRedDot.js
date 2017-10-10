SyntaxHighlighter.brushes.Custom = function()
{
	this.regexList = [
		{ regex: /&lt;%([^!])+?%&gt;/gm,								css: 'placeholder' },
		{ regex: /&lt;!(\/?)IoRange(.+?)&gt;/gm,						css: 'blockmark' },
		{ regex: /&lt;!IoRedDot(.+?)&gt;/gm,							css: 'smartedit-reddot' },
		{ regex: /&lt;(\/?)reddot:cms&gt;/gm,							css: 'rendertag' },
		{ regex: /&lt;%!!(.+?)!!%&gt;/gm,								css: 'rendertag' }
		];
};
SyntaxHighlighter.brushes.Custom .prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Custom.aliases = ['RedDot'];