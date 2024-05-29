// Prettier配置文档：https://prettier.io/docs/en/options.html
module.exports = {
	//换行字符数
	printWidth: 180,
	//使用2哥个空格缩进
	tabWidth: 2,
	//不使用缩进符(用空格)
	useTabs: false,
	//行尾分号
	semi: false,
	//使用单引号
	singleQuote: true,
	//对象的key在必要时使用引号
	quoteProps: "as-needed",
	//jsx使用双引号
	jsxSingleQuote: false,
	//末尾逗号
	trailingComma: "none",
	//大括号内的首尾需要空格
	bracketSpacing: true,
	//jsx标签的反尖括号需要换行
	bracketSameLine: false,
	//箭头函数只有一个参数也需要括号
	arrowParens: "always",
	//使用默认的折行标准
	proseWrap: "preserve",
	htmlWhitespaceSensitivity: "ignore",
	vueIndentScriptAndStyle: false,
	endOfLine: "lf",
	embeddedLanguageFormatting: "auto",
	singleAttributePerLine: false,
	//自定义文件后缀对应的parser
	parsers: {
		".nvue": "vue",
		".ux": "vue",
		".uvue": "vue",
		".uts": "typescript"
	}
}