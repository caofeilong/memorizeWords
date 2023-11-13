const words = [
    { "word": "fragile", "zh": "脆弱的、易碎的", "soundmark": "/ˈfrædʒaɪl/", "eg": "Handle the glassware carefully; it's very fragile.", "egzh": "小心处理玻璃制品；它们非常脆弱。", "feat": "adj." },
    { "word": "fragment", "zh": "碎片、片段", "soundmark": "/ˈfræɡmənt/", "eg": "The archaeologists found a fragment of an ancient vase.", "egzh": "考古学家发现了一块古代花瓶的碎片。", "feat": "n." },
    { "word": "fraction", "zh": "分数、部分", "soundmark": "/ˈfrækʃən/", "eg": "One-quarter is a fraction of a whole.", "egzh": "四分之一是一个整体的分数。", "feat": "n." },
    { "word": "front", "zh": "前面、正面", "soundmark": "/frʌnt/", "eg": "The entrance is at the front of the building.", "egzh": "入口位于建筑物的前面。", "feat": "n." },
    { "word": "frontier", "zh": "边界、边境", "soundmark": "/ˈfrʌntɪər/", "eg": "Explorers often ventured into the unknown frontier.", "egzh": "探险家经常冒险进入未知的边界地区。", "feat": "n." },
    { "word": "confront", "zh": "面对、对抗", "soundmark": "/kənˈfrʌnt/", "eg": "She had to confront her fear of public speaking.", "egzh": "她不得不面对自己对公开演讲的恐惧。", "feat": "v." },
    { "word": "confuse", "zh": "混淆、困惑", "soundmark": "/kənˈfjuːz/", "eg": "The complex instructions can confuse users.", "egzh": "复杂的说明会使用户感到困惑。", "feat": "v." },
    { "word": "refuse", "zh": "拒绝、废物", "soundmark": "/rɪˈfjuːz/", "eg": "He will refuse to accept the offer.", "egzh": "他将拒绝接受这个提议。", "feat": "v./n." },
    { "word": "diffuse", "zh": "扩散、散布", "soundmark": "/dɪˈfjuːz/", "eg": "The aroma will diffuse throughout the room.", "egzh": "香气将扩散到整个房间。", "feat": "v." },
    { "word": "fuse", "zh": "熔化、保险丝", "soundmark": "/fjuːz/", "eg": "The extreme heat caused the metal to fuse.", "egzh": "极高的温度使金属熔化。", "feat": "v./n." },
    { "word": "refund", "zh": "退款、偿还", "soundmark": "/rɪˈfʌnd/", "eg": "You can request a refund for the damaged product.", "egzh": "您可以要求退还受损的产品。", "feat": "n./v." },
    { "word": "gender", "zh": "性别", "soundmark": "/ˈdʒendər/", "eg": "Gender equality is an important social issue.", "egzh": "性别平等是一个重要的社会问题。", "feat": "n." },
    { "word": "gene", "zh": "基因", "soundmark": "/dʒiːn/", "eg": "Genes play a crucial role in heredity.", "egzh": "基因在遗传中起着至关重要的作用。", "feat": "n." },
    { "word": "genetic", "zh": "遗传的、基因的", "soundmark": "/dʒəˈnɛtɪk/", "eg": "Some diseases have a genetic basis.", "egzh": "一些疾病有遗传基础。", "feat": "adj." },
    { "word": "general", "zh": "一般的、将军", "soundmark": "/ˈdʒenərəl/", "eg": "The general consensus is that the plan is feasible.", "egzh": "一般的共识是这个计划是可行的。", "feat": "adj./n." },
    { "word": "generalize", "zh": "概括、归纳", "soundmark": "/ˈdʒenərəlaɪz/", "eg": "It's not accurate to generalize from one example.", "egzh": "从一个例子概括出结论是不准确的。", "feat": "v." },
    { "word": "generality", "zh": "一般性、普遍性", "soundmark": "/ˌdʒenəˈræləti/", "eg": "The statement has a generality that makes it less useful.", "egzh": "这个陈述具有一般性，使其不太有用。", "feat": "n." },
    { "word": "generally", "zh": "通常、一般地", "soundmark": "/ˈdʒenərəli/", "eg": "She is generally punctual for meetings.", "egzh": "她通常准时参加会议。", "feat": "adv." },
    { "word": "generate", "zh": "生成、产生", "soundmark": "/ˈdʒenəreɪt/", "eg": "The wind turbines generate electricity.", "egzh": "风力涡轮机发电。", "feat": "v." },
    { "word": "generation", "zh": "一代、代数", "soundmark": "/ˌdʒenəˈreɪʃən/", "eg": "Each generation has its own challenges.", "egzh": "每一代人都有自己的挑战。", "feat": "n." },
    { "word": "generator", "zh": "发电机、生成器", "soundmark": "/ˈdʒenəreɪtər/", "eg": "The backup generator provides electricity during outages.", "egzh": "备用发电机在停电时提供电力。", "feat": "n." },
    { "word": "generous", "zh": "慷慨的、大方的", "soundmark": "/ˈdʒenərəs/", "eg": "She is known for her generous donations to charity.", "egzh": "她以慷慨捐赠慈善事业而闻名。", "feat": "adj." },
    { "word": "genius", "zh": "天才、天赋", "soundmark": "/ˈdʒiːniəs/", "eg": "Einstein is considered a genius in the field of physics.", "egzh": "爱因斯坦被认为是物理学领域的天才。", "feat": "n." },
    { "word": "genuine", "zh": "真正的、真实的", "soundmark": "/ˈdʒɛnjuɪn/", "eg": "Her smile was a genuine expression of happiness.", "egzh": "她的微笑是真正的幸福表达。", "feat": "adj." },
    { "word": "genocide", "zh": "种族灭绝、大屠杀", "soundmark": "/ˈdʒɛnəsaɪd/", "eg": "The international community condemns genocide.", "egzh": "国际社会谴责种族灭绝。", "feat": "n." },
    { "word": "gentle", "zh": "温和的、文雅的", "soundmark": "/ˈdʒɛntəl/", "eg": "She had a gentle way of speaking.", "egzh": "她说话的方式温和文雅。", "feat": "adj." },
    { "word": "gently", "zh": "轻轻地、温柔地", "soundmark": "/ˈdʒɛntli/", "eg": "She touched the flower's petals gently.", "egzh": "她轻轻触摸了花瓣。", "feat": "adv." },
    { "word": "gentleman", "zh": "绅士、有教养的男士", "soundmark": "/ˈdʒɛntlmən/", "eg": "He is a true gentleman in every sense.", "egzh": "他在各个方面都是一个真正的绅士。", "feat": "n." },
    { "word": "gentlemanly", "zh": "绅士风度的", "soundmark": "/ˈdʒɛntlmənli/", "eg": "His behavior was gentlemanly and courteous.", "egzh": "他的举止是绅士风度和有礼的。", "feat": "adj." },
    { "word": "digest", "zh": "消化、摘要", "soundmark": "/ˈdaɪdʒɛst/", "eg": "The stomach helps to digest food.", "egzh": "胃帮助消化食物。", "feat": "v./n." },
    { "word": "suggest", "zh": "建议、暗示", "soundmark": "/səˈdʒɛst/", "eg": "She will suggest a new approach to the problem.", "egzh": "她将提出一个解决问题的新方法。", "feat": "v." },
    { "word": "suggestion", "zh": "建议、暗示", "soundmark": "/səˈdʒɛstʃən/", "eg": "Do you have any suggestions for improving the project?", "egzh": "你有关于改进项目的建议吗？", "feat": "n." },
    { "word": "gesture", "zh": "手势、姿势", "soundmark": "/ˈdʒɛstʃər/", "eg": "He made a friendly gesture with his hand.", "egzh": "他用手做出友好的手势。", "feat": "n." },
    { "word": "diagnose", "zh": "诊断、判断", "soundmark": "/ˈdaɪəɡnoʊz/", "eg": "The doctor will diagnose the patient's condition.", "egzh": "医生将诊断患者的病情。", "feat": "v." },
    { "word": "cognitive", "zh": "认知的、认识的", "soundmark": "/ˈkɑɡnɪtɪv/", "eg": "Cognitive abilities decline with age.", "egzh": "认知能力随年龄增长而下降。", "feat": "adj." },
    { "word": "cognition", "zh": "认知、认识", "soundmark": "/kɑɡˈnɪʃən/", "eg": "The study of cognition is a complex field.", "egzh": "认知研究是一个复杂的领域。", "feat": "n." },
    { "word": "recognize", "zh": "认出、承认", "soundmark": "/ˈrɛkəɡnaɪz/", "eg": "I couldn't recognize her in the disguise.", "egzh": "我无法在伪装中认出她。", "feat": "v." },
    { "word": "recognition", "zh": "认可、承认", "soundmark": "/ˌrɛkəɡˈnɪʃən/", "eg": "The award is a recognition of his achievements.", "egzh": "这个奖项是对他成就的认可。", "feat": "n." },
    { "word": "grade", "zh": "等级、年级", "soundmark": "/ɡreɪd/", "eg": "The quality of the coffee depends on the grade of beans.", "egzh": "咖啡的质量取决于咖啡豆的等级。", "feat": "n." },
    { "word": "grader", "zh": "年级学生、评分者", "soundmark": "/ˈɡreɪdər/", "eg": "The fifth grader is excited about moving up a grade.", "egzh": "五年级学生对升上六年级感到兴奋。", "feat": "n." },
    { "word": "gradual", "zh": "逐渐的、渐进的", "soundmark": "/ˈɡrædʒuəl/", "eg": "There was a gradual improvement in his health.", "egzh": "他的健康状况逐渐好转。", "feat": "adj." },
    { "word": "graduate", "zh": "毕业生、研究生", "soundmark": "/ˈɡrædʒuət/", "eg": "She is a recent graduate of the university.", "egzh": "她是该大学的最新毕业生。", "feat": "n." },
    { "word": "postgraduate", "zh": "研究生、研究生的", "soundmark": "/ˌpoʊstˈɡrædʒuət/", "eg": "He is pursuing a postgraduate degree.", "egzh": "他正在攻读研究生学位。", "feat": "n./adj." },
    { "word": "undergraduate", "zh": "本科生、大学生", "soundmark": "/ˌʌndərˈɡrædʒuət/", "eg": "The university has a large population of undergraduate students.", "egzh": "该大学有大量的本科生。", "feat": "n." },
    { "word": "aggressive", "zh": "侵略的、好斗的", "soundmark": "/əˈɡrɛsɪv/", "eg": "His aggressive behavior caused conflicts.", "egzh": "他的好斗行为引起了冲突。", "feat": "adj." },
    { "word": "congress", "zh": "国会、代表大会", "soundmark": "/ˈkɑŋɡrɛs/", "eg": "The congress will convene next week.", "egzh": "代表大会将于下周召开。", "feat": "n." },
    { "word": "progress", "zh": "进展、前进", "soundmark": "/ˈprɑɡrɛs/", "eg": "The project is making good progress.", "egzh": "这个项目进展顺利。", "feat": "n." },
    { "word": "progressive", "zh": "进步的、渐进的", "soundmark": "/prəˈɡrɛsɪv/", "eg": "She has a progressive approach to education.", "egzh": "她对教育有渐进的方法。", "feat": "adj." },
    { "word": "ingredient", "zh": "成分、原料", "soundmark": "/ɪnˈɡriːdiənt/", "eg": "Flour is a key ingredient in making bread.", "egzh": "面粉是制作面包的关键成分。", "feat": "n." },
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