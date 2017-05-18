import ModelGenerator from '../utils/ModelGenerator';

//hosts
const host0 = ModelGenerator.generateMember("Micheal", "male", 35, 13937653812, "www/images/avatar/cook0.png");
const host1 = ModelGenerator.generateMember("Aris", "female", 25, 13937653812, "www/images/avatar/cook1.png");
const host2 = ModelGenerator.generateMember("Lucy", "female", 28, 13937653812, "www/images/avatar/cook2.png");
const host3 = ModelGenerator.generateMember("Kate", "female", 28, 13937653812, "www/images/avatar/cook3.png");

//members
const member0 = ModelGenerator.generateMember("Micheal", "male", 35, 13937653812);
const member1 = ModelGenerator.generateMember("Aris", "female", 25, 13937653812);
const member2 = ModelGenerator.generateMember("Lucy", "female", 28, 13937653812);
const member3 = ModelGenerator.generateMember("Kate", "female", 28, 13937653812);
const member4 = ModelGenerator.generateMember("Carl", "male", 35, 13937653812);
const member5 = ModelGenerator.generateMember("Tom", "male", 25, 13937653812);
const member6 = ModelGenerator.generateMember("Jim", "male", 40, 13937653812);
const member7 = ModelGenerator.generateMember("God", "male", 999, 13937653812);

//locations
const location0 = ModelGenerator.generateLocation("Shaanxi", "Xi'an", "Tian gu eight street", "Huanpu", "E606");

export default [
    ModelGenerator.generateActivity("Great Dinner", host0, "Come and eat!", ["www/images/kitchen/kitchen0.jpg"], 8, location0, new Date(2017, 5, 18, 12, 0), [member0, member1, member2, member3]),
    ModelGenerator.generateActivity("Funny Lunch", host1, "Come and eat!", ["www/images/kitchen/kitchen1.jpg"], 8, location0, new Date(2017, 5, 18, 12, 0), [member4, member7, member2, member5]),
    ModelGenerator.generateActivity("Supper", host2, "Come and eat!", ["www/images/kitchen/kitchen2.jpg"], 8, location0, new Date(2017, 5, 18, 18, 0), [member7, member6, member1, member3]),
    ModelGenerator.generateActivity("Breakfast", host3, "Come and eat!", ["www/images/kitchen/kitchen3.jpg"], 8, location0, new Date(2017, 5, 18, 9, 0), [member2, member1, member4, member5]),
];