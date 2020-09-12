# fe_-questionnaire


# 题目列表数据结构

应该使用该数据结构，替换question.js中的内容

```json
{
 "desc": "接口放到啦",     //问卷描述
 "id": 1,				//问卷ID
 "name": "三哥",			//问卷名称
 "recommend": "dfkfad",		//无需关心
 "subjects": [		//题目列表，按顺序排列
 	{		//单题的数据结构
	 "isCurrent": false,  //是否从该题开始作答（说明之前的题目已经答过了）
	  "answers": ["选项一", "选项一", "选项一", "选项一"], 	//用户已选择的答案（历史记录）
	  "isNecessary": 1,		//是否必选，目前好像没用到
	  "items": ["选项一", "选项一", "选项一", "选项一"],	//题干选项
	  "subjectGroup": "未命名分组",	//暂时无需关心
	  "subjectId": 3,				//题目ID
	  "subjectName": "题目名称",		//题目名称
	  "subjectNum": 1,				//题目序号
	  "subjectScore": 5,			//本题得分，无需关心
	  "subjectTips": "题目提示文案",		//冗余字段，暂时无需关心
	  "textAnswers": "你说的发生的",		//本题得分，暂时无需关心
	  "type": 4			//选项类型， 1.(11位) 手机号，2.数字，3.单选，4.复选，5.单行文本框，6.文本块，7.标签。 目前只用到了3、4、6、7
 }, 
 	{  //第二题的数据
  "isCurrent": true,  //是否从该题开始作答（说明之前的题目已经答过了）
  "answers": ["选项一", "选项一", "选项一", "选项一"],
  "isNecessary": 1,
  "items": ["选项一", "选项一", "选项一", "选项一"],
  "subjectGroup": "未命名分组",
  "subjectId": 4,
  "subjectName": "题目名称",
  "subjectNum": 1,
  "subjectScore": 5,
  "subjectTips": "题目提示文案",
  "textAnswers": "你说的发生的",
  "type": 4
 }],
 "totalScore": 100
}
```


# 数据提交接口

URL: `${域名}/testPaper/v1.0.0/subject/submit`

每选择一个题目，则进行一步提交

请求格式如下：

```json
{
 "subjectId": 112312, //题目id
 "isOver": 1, //是否结束 1已结束 0未结束
 "answers": "选项一@@@选项二@@@选项三" //用户答案,多选题用逗号分隔,单选和标签类及文本类直接放答案,用户没填的放空字符串
}
```

响应格式如下：

```json
{
 "code": "200", //200成功,其它代表异常,
 "message": "成功",
 "data": 89 //该题得分,如果是最后一题,代表总问卷得分，然后跳转到结果页
}
```

