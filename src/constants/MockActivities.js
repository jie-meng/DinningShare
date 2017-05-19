import ModelGenerator from '../utils/ModelGenerator';

//hosts
const host0 = ModelGenerator.generateMember("Cui Jiao", "female", 18910300008, "images/avatar/cook6.png");
const host1 = ModelGenerator.generateMember("Zhao Shaoyi", "male", 15010898988, "images/avatar/cook7.png");
const host2 = ModelGenerator.generateMember("Ling Wei", "female", 13521655988, "images/avatar/cook8.png");
const host3 = ModelGenerator.generateMember("Meng Jie", "male", 13937653812, "images/avatar/cook9.png");

//members
const member0 = ModelGenerator.generateMember("Micheal", "male", 13366666617);
const member1 = ModelGenerator.generateMember("Aris", "female", 15600001688);
const member2 = ModelGenerator.generateMember("Lucy", "female", 18901161718);
const member3 = ModelGenerator.generateMember("Kate", "female", 17777787703);
const member4 = ModelGenerator.generateMember("Carl", "male", 18600220000);
const member5 = ModelGenerator.generateMember("Tom", "male", 15910888882);
const member6 = ModelGenerator.generateMember("Jim", "male", 13436666662);
const member7 = ModelGenerator.generateMember("God", "male", 15811581132);

const location0 = "Shaanxi Xi'an Tian gu eight street Huanpu E606";

export default [
    ModelGenerator.generateActivity("My first cooking", host0, "This is my first cooking dinner, who want a taste? ^__^", ["images/kitchen/kitchen0.png"], 8, location0, new Date(2017, 5, 18, 12, 0), '',[member0, member1, member2, member3]),
    ModelGenerator.generateActivity("Shaanxi noodle", host1, "I am a good noodle maker, you wanna a try?", ["images/kitchen/kitchen1.png"], 8, location0, new Date(2017, 5, 18, 12, 0), '',[member4, member7, member2, member5]),
    ModelGenerator.generateActivity("Dumplings", host2, "Dumplings with beef inside.", ["images/kitchen/kitchen2.png"], 8, location0, new Date(2017, 5, 18, 18, 0), '', [member7, member6, member1, member3]),
    ModelGenerator.generateActivity("European feelings", host3, "Actually I just bought something from KFC ...", ["images/kitchen/kitchen3.png"], 8, location0, new Date(2017, 5, 18, 9, 0),'', [member2, member1, member4, member5]),
];