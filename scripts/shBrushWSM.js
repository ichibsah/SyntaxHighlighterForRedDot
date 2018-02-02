SyntaxHighlighter.brushes.Custom = function () {
    this.regexList = [
        { regex: /&lt;%([^!])+?%&gt;/gm, css: 'placeholder' },
        { regex: /&lt;!(\/?)IoRange(.+?)&gt;/gm, css: 'blockmark' },
        { regex: /&lt;!IoRedDot(.+?)&gt;/gm, css: 'smartedit-wsm' },
        { regex: /&lt;%!!(.+?)!!%&gt;/gm, css: 'rendertag-short' },
        { regex: /&lt;(\/?)reddot:cms&gt;/gm, css: 'rendertag' },
        { regex: /&lt;navigation(.*?)&gt;/gm, css: 'rendertag' },
        { regex: /&lt;(\/?)output(.*?)&gt;/gm, css: 'rendertag' },
        { regex: /&lt;(\/?)foreach(.*?)&gt;/gm, css: 'rendertag' },
        { regex: /&lt;(\/?)if&gt;/gm, css: 'rendertag' },
        { regex: /&lt;(\/?)query(.*?)&gt;/gm, css: 'rendertag' },
        { regex: /&lt;(\/?)htmltext&gt;/gm, css: 'rendertag' },
        { regex: /&lt;(\/?)xmltext&gt;/gm, css: 'rendertag' },
        { regex: /&lt;(\/?)currentPageCommentCount(.*?)&gt;/gm, css: 'rendertag' },
        { regex: /&lt;(\/?)pagesMostCommented(.*?)&gt;/gm, css: 'rendertag' }
    ];
};
SyntaxHighlighter.brushes.Custom.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Custom.aliases = ['WSM'];