import Mock from "../dist/WxMock.js"
const meetings = []
for (let i = 0; i < 1; i++) {
  meetings.push(Mock.mock({
    id: 3,
    'name|1': ['会议xx', '会议xx', '会议xx', '会议xx'],
    time: Mock.Random.date(),
    'host|1': ['？书记', '？老师', '？院长', '？？？'],
    'recoder|1': ['记录人1', '记录人2', '记录人3', '记录人4'],
    'type|1': ['党员会议', '支部会议', '日常会议', '？？会议'],
    'addr|1': ['办公室1306', '教室1601', '图书馆报告厅', '？？地方'],
    'content|1': ['办公室1306', '教室1601', '图书馆报告厅', '？？地方']
  }))
}

export { meetings }