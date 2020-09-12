const data = {
  description: "试卷描述",
  id: 1,
  name: "试卷名称",
  recommend: "试卷北张庄",
  subjects: [
    {
      answers: ["男"],
      isNecessary: 1,
      items: ["男", "女"],
      subjectGroup: "未命名分组",
      subjectId: 3,
      subjectName: "请选择你的性别",
      subjectNum: 3,
      subjectScore: 7,
      subjectTips: "答题提示xxx",
      type: 3,
      type_desc: "单选框",
    },
    {
      answers: ["苹果", "华为"],
      isNecessary: 1,
      items: ["苹果", "华为", "小米", "魅族"],
      subjectGroup: "未命名分组",
      subjectId: 4,
      subjectName: "请选择你想要的手机",
      subjectNum: 4,
      subjectScore: 8,
      subjectTips: "答题提示xxx",
      type: 4,
      type_desc: "复选框",
    },
    {
      answers: [],
      isNecessary: 1,
      items: [],
      subjectGroup: "未命名分组",
      subjectId: 6,
      subjectName: "下面应该是个文本块",
      subjectNum: 6,
      subjectScore: 2,
      subjectTips: "答题提示xxx",
      type: 6,
      type_desc: "文本块",
    },
    {
      answers: [],
      isNecessary: 1,
      items: ["标签一", "标签2", "标签3", "标签4"],
      subjectGroup: "未命名分组",
      subjectId: 7,
      subjectName: "这应该是个标签组",
      subjectNum: 7,
      subjectScore: 3,
      subjectTips: "答题提示xxx",
      type: 7,
      type_desc: "标签组",
    },
    {
      answers: [],
      isNecessary: 1,
      items: [],
      subjectGroup: "未命名分组",
      subjectId: 6,
      subjectName: "下面应该是个文本块",
      subjectNum: 6,
      subjectScore: 2,
      subjectTips: "答题提示xxx",
      type: 6,
      type_desc: "文本块",
    },
    {
      answers: [],
      isNecessary: 1,
      items: ["标签一", "标签2", "标签3", "标签4"],
      subjectGroup: "未命名分组",
      subjectId: 7,
      subjectName: "这应该是个标签组",
      subjectNum: 7,
      subjectScore: 3,
      subjectTips: "答题提示xxx",
      type: 7,
      type_desc: "标签组",
    },
  ],
  totalScore: 100,
};

const questions = data.subjects;

const questions2 = [
  {
    type: 6, // multi , input
    subjectId: 0,
    items: [
      "问题1",
      "选项2",
      "选项3",
      "选项4",
      "选项5",
      "选项4选项4",
      "选项6",
      "选项7",
    ],
    subjectName:
      "孩子的学习动力不足，主动性差，需要家长和老师经常盯着才完成，感觉总是不情愿。",
  },
  {
    type: 3, // multi , input
    subjectId: 1,
    items: [
      "afawefawefawefawefawefawefawefawfwaefwawfawe",
      "选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2选项2",
      "选项3",
      "选项4",
      "选项5",
      "选项6",
      "选项7",
    ],
    subjectName:
      "孩子的学习动力不足，主动性差，需要家长和老师经常盯着才完成学习任务，感觉总是不情愿。",
  },
  {
    type: 4, // multi , input
    subjectId: 2,
    items: [
      "问题1",
      "选项2",
      "选项3",
      "选项4",
      "选项8",
      "选项9",
      "选项45",
      "选项44",
    ],
    subjectName: "孩子的学习动力不足，主动性差，需要家长和老师经。",
  },
  {
    type: 5, // multi , input
    subjectId: 3,
    items: [
      "问题1",
      "选项2",
      "选项3",
      "选项4",
      "选项8",
      "选项9",
      "选项45",
      "选项44",
    ],
    placeholder: "请输入某个某个。。。",
    subjectName:
      "孩子的学习动力不足，主动性差，和老师经常盯着才完成学习任务，感觉总是不情愿。",
  },
  {
    type: 3, // multi , input
    subjectId: 4,
    items: ["问题1", "选项2", "选项3", "选项8", "选项9", "选项45", "选项44"],
    subjectName:
      "孩子的学习动力不足，主动性差，需要家长和老师经常盯着才完成，感觉总是不情愿。",
  },
];
