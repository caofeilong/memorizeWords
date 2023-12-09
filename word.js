const words = [
    { "word": "idea", "zh": "想法、主意", "soundmark": "/aɪˈdiə/", "eg": "He had a brilliant idea for the new advertising campaign.", "egzh": "他为新的广告活动想到了一个绝妙的主意。", "feat": "n." },
    { "word": "ideal", "zh": "理想、理想的", "soundmark": "/aɪˈdiəl/", "eg": "Their relationship was far from ideal.", "egzh": "他们的关系远非理想。", "feat": "n./adj." },
    { "word": "ideology", "zh": "意识形态、思想体系", "soundmark": "/ˌaɪdiˈɑːlədʒi/", "eg": "Political parties often have different ideologies.", "egzh": "政党通常有不同的意识形态。", "feat": "n." },
    { "word": "idol", "zh": "偶像、崇拜对象", "soundmark": "/ˈaɪdəl/", "eg": "She considered the famous singer her idol.", "egzh": "她把那位著名歌手视为自己的偶像。", "feat": "n." },
    { "word": "idiom", "zh": "成语、习语", "soundmark": "/ˈɪdiəm/", "eg": "Learning idioms can enrich your language skills.", "egzh": "学习成语可以丰富你的语言技能。", "feat": "n." },
    { "word": "idiot", "zh": "白痴、笨蛋", "soundmark": "/ˈɪdiət/", "eg": "Don't be such an idiot; use common sense.", "egzh": "别当白痴，动动脑子。", "feat": "n." },
    { "word": "adjective", "zh": "形容词", "soundmark": "/ˈædʒɪktɪv/", "eg": "In the sentence, 'happy' is an adjective describing the cat.", "egzh": "在这个句子中，“happy”是描述猫的形容词。", "feat": "n." },
    { "word": "eject", "zh": "弹射、驱逐", "soundmark": "/ɪˈdʒɛkt/", "eg": "The pilot had to eject from the plane before it crashed.", "egzh": "飞行员不得不在飞机坠毁之前弹射出来。", "feat": "v." },
    { "word": "inject", "zh": "注射、注入", "soundmark": "/ɪnˈdʒɛkt/", "eg": "The doctor will inject the vaccine to prevent the disease.", "egzh": "医生将注射疫苗以预防疾病。", "feat": "v." },
    { "word": "injection", "zh": "注射、注入", "soundmark": "/ɪnˈdʒɛkʃən/", "eg": "The nurse administered the injection with care.", "egzh": "护士小心翼翼地给予了注射。", "feat": "n." },
    { "word": "object", "zh": "物体、目标", "soundmark": "/ˈɑːbdʒɪkt/", "eg": "The object in the museum dates back to ancient times.", "egzh": "博物馆里的物体可以追溯到古代。", "feat": "n." },
    { "word": "objective", "zh": "客观的、目标", "soundmark": "/əbˈdʒɛktɪv/", "eg": "We need to take an objective look at the situation.", "egzh": "我们需要客观地看待这个情况。", "feat": "adj./n." },
    { "word": "objection", "zh": "异议、反对", "soundmark": "/əbˈdʒɛkʃən/", "eg": "His objection to the proposal was well-founded.", "egzh": "他对这个提案的反对是有根据的。", "feat": "n." },
    { "word": "project", "zh": "项目、工程", "soundmark": "/ˈprɒdʒɛkt/", "eg": "The construction project will begin next month.", "egzh": "建设项目将于下个月开始。", "feat": "n." },
    { "word": "projector", "zh": "投影仪、放映机", "soundmark": "/prəˈdʒɛktər/", "eg": "The classroom is equipped with a modern projector.", "egzh": "教室里配备了一台现代化的投影仪。", "feat": "n." },
    { "word": "reject", "zh": "拒绝、排斥", "soundmark": "/rɪˈdʒɛkt/", "eg": "The committee decided to reject the proposal.", "egzh": "委员会决定拒绝这个提案。", "feat": "v." },
    { "word": "subject", "zh": "主题、科目", "soundmark": "/ˈsʌbdʒɪkt/", "eg": "The subject of the painting is a beautiful landscape.", "egzh": "这幅画的主题是一幅美丽的风景。", "feat": "n." },
    { "word": "subjective", "zh": "主观的", "soundmark": "/səbˈdʒɛktɪv/", "eg": "Interpretation of art is often subjective.", "egzh": "对艺术的解释常常是主观的。", "feat": "adj." },
    { "word": "journal", "zh": "期刊、日志", "soundmark": "/ˈdʒɜːrnəl/", "eg": "She published her research in a scientific journal.", "egzh": "她在一本科学期刊上发表了她的研究。", "feat": "n." },
    { "word": "journalist", "zh": "记者、新闻工作者", "soundmark": "/ˈdʒɜːrnəlɪst/", "eg": "The journalist reported on the latest political developments.", "egzh": "记者报道了最新的政治动态。", "feat": "n." },
    { "word": "journey", "zh": "旅程、行程", "soundmark": "/ˈdʒɜːrni/", "eg": "The journey across the desert was challenging.", "egzh": "穿越沙漠的旅程充满了挑战。", "feat": "n." },
    { "word": "juvenile", "zh": "少年的、幼稚的", "soundmark": "/ˈdʒuːvənaɪl/", "eg": "The court deals with juvenile offenders differently.", "egzh": "法院对待青少年犯罪分子的方式是不同的。", "feat": "adj." },
    { "word": "junior", "zh": "初级的、年少的", "soundmark": "/ˈdʒuːniər/", "eg": "He was promoted from junior to senior manager.", "egzh": "他从初级经理升任为高级经理。", "feat": "adj." },
    { "word": "conjunction", "zh": "连接词、联合", "soundmark": "/kənˈdʒʌŋkʃən/", "eg": "A conjunction connects words, phrases, or clauses in a sentence.", "egzh": "连接词连接句子中的单词、短语或从句。", "feat": "n." },
    { "word": "junction", "zh": "交叉点、连接点", "soundmark": "/ˈdʒʌŋkʃən/", "eg": "The highway has a major junction with several exits.", "egzh": "这条高速公路有一个主要的交叉口，有几个出口。", "feat": "n." },
    { "word": "adjoin", "zh": "毗邻、邻接", "soundmark": "/əˈdʒɔɪn/", "eg": "Our backyard adjoins the neighbor's garden.", "egzh": "我们的后院毗邻邻居的花园。", "feat": "v." },
    { "word": "joint", "zh": "关节、共同的", "soundmark": "/dʒɔɪnt/", "eg": "She suffers from pain in her knee joint.", "egzh": "她的膝盖关节疼痛。", "feat": "n./adj." },
    { "word": "jury", "zh": "陪审团、评奖团", "soundmark": "/ˈdʒʊri/", "eg": "The jury deliberated for hours before reaching a verdict.", "egzh": "陪审团在达成裁决之前进行了数小时的研讨。", "feat": "n." },
    { "word": "injury", "zh": "伤害、损伤", "soundmark": "/ˈɪndʒəri/", "eg": "He suffered a severe injury in the accident.", "egzh": "他在事故中受到了严重的伤害。", "feat": "n." },
    { "word": "injure", "zh": "伤害、损害", "soundmark": "/ˈɪndʒər/", "eg": "The reckless driver could injure others on the road.", "egzh": "鲁莽的司机可能会在路上伤害其他人。", "feat": "v." },
    { "word": "justice", "zh": "正义、司法", "soundmark": "/ˈdʒʌstɪs/", "eg": "The legal system seeks to uphold justice for all.", "egzh": "法律体系致力于为所有人维护正义。", "feat": "n." },
    { "word": "justify", "zh": "证明…正当、辩解", "soundmark": "/ˈdʒʌstɪfaɪ/", "eg": "You need to justify your actions in this situation.", "egzh": "在这种情况下，你需要证明你的行为是正当的。", "feat": "v." },
    { "word": "adjust", "zh": "调整、适应", "soundmark": "/əˈdʒʌst/", "eg": "You can adjust the volume using the control knob.", "egzh": "你可以用控制旋钮调整音量。", "feat": "v." },
    { "word": "labor", "zh": "劳动、工作", "soundmark": "/ˈleɪbər/", "eg": "Manual labor is often physically demanding.", "egzh": "体力劳动通常要求身体劳累。", "feat": "n." },
    { "word": "collaborate", "zh": "合作、协作", "soundmark": "/kəˈlæbəreɪt/", "eg": "Scientists from different countries collaborate on research projects.", "egzh": "来自不同国家的科学家们合作进行研究项目。", "feat": "v." },
    { "word": "elaborate", "zh": "详细阐述、精心制作", "soundmark": "/ɪˈlæbərət/", "eg": "The architect provided an elaborate design for the building.", "egzh": "建筑师为建筑提供了一个详细的设计。", "feat": "v./adj." },
    { "word": "lapse", "zh": "失误、流逝", "soundmark": "/læps/", "eg": "The athlete's lapse in concentration cost him the victory.", "egzh": "运动员注意力的疏忽使他失去了胜利。", "feat": "n." },
    { "word": "collapse", "zh": "崩溃、倒塌", "soundmark": "/kəˈlæps/", "eg": "The old building is in danger of collapse.", "egzh": "这座老建筑有倒塌的危险。", "feat": "v./n." },
    { "word": "elapse", "zh": "消逝、流逝", "soundmark": "/ɪˈlæps/", "eg": "Several hours had elapsed before they found the missing child.", "egzh": "几个小时过去了，他们才找到失踪的孩子。", "feat": "v." },
    { "word": "translate", "zh": "翻译、转化", "soundmark": "/trænsˈleɪt/", "eg": "It's challenging to accurately translate idioms into another language.", "egzh": "准确地将习语翻译成另一种语言是一项挑战。", "feat": "v." },
    { "word": "translation", "zh": "翻译、转化", "soundmark": "/trænsˈleɪʃən/", "eg": "The translation of this text may have slight variations.", "egzh": "这段文字的翻译可能有轻微的变化。", "feat": "n." },
    { "word": "relate", "zh": "关联、叙述", "soundmark": "/rɪˈleɪt/", "eg": "The two incidents are closely related.", "egzh": "这两起事件密切相关。", "feat": "v." },
    { "word": "relation", "zh": "关系、亲戚", "soundmark": "/rɪˈleɪʃən/", "eg": "The relation between the two countries improved over time.", "egzh": "这两个国家之间的关系随着时间的推移而得到改善。", "feat": "n." },
    { "word": "relative", "zh": "相对的、亲戚", "soundmark": "/ˈrɛlətɪv/", "eg": "Time is relative, depending on one's perspective.", "egzh": "时间是相对的，取决于个人的观点。", "feat": "adj./n." },
    { "word": "relativity", "zh": "相对性", "soundmark": "/ˌrɛləˈtɪvɪti/", "eg": "Albert Einstein's theory of relativity revolutionized physics.", "egzh": "爱因斯坦的相对论理论彻底改变了物理学。", "feat": "n." },
    { "word": "reltionship", "zh": "关系、亲戚", "soundmark": "/rɪˈleɪʃɪp/", "eg": "Building a strong relationship takes time and effort.", "egzh": "建立牢固的关系需要时间和努力。", "feat": "n." },
    { "word": "correlate", "zh": "相关、相关物", "soundmark": "/ˈkɒrəˌleɪt/", "eg": "The increase in temperature may correlate with the rise in sea levels.", "egzh": "温度的升高可能与海平面的上升有关。", "feat": "v./n." },
]

function getWord(word, dir) {
    let index = Math.ceil(Math.random() * (words.length - 1))
    if (word) {
        const wordIndex = words.findIndex(item => item.word === word)
        index = wordIndex + dir
        if (index < 0) {
            index = words.length - 1
        }
        if (index >= words.length) {
            index = 0
        }
    }

    return words[index]
}