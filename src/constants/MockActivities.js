import ModelGenerator from '../utils/ModelGenerator';

//hosts
const host0 = ModelGenerator.generateMember("Micheal", "male", 13937653812, "images/avatar/cook0.png");
const host1 = ModelGenerator.generateMember("Aris", "female", 13937653812, "images/avatar/cook1.png");
const host2 = ModelGenerator.generateMember("Lucy", "female", 13937653812, "images/avatar/cook2.png");
const host3 = ModelGenerator.generateMember("Kate", "female", 13937653812, "images/avatar/cook3.png");

//members
const member0 = ModelGenerator.generateMember("Micheal", "male", 13937653812);
const member1 = ModelGenerator.generateMember("Aris", "female", 13937653812);
const member2 = ModelGenerator.generateMember("Lucy", "female", 13937653812);
const member3 = ModelGenerator.generateMember("Kate", "female", 13937653812);
const member4 = ModelGenerator.generateMember("Carl", "male", 13937653812);
const member5 = ModelGenerator.generateMember("Tom", "male", 13937653812);
const member6 = ModelGenerator.generateMember("Jim", "male", 13937653812);
const member7 = ModelGenerator.generateMember("God", "male", 13937653812);

//locations
const location0 = ModelGenerator.generateLocation("Shaanxi", "Xi'an", "Tian gu eight street", "Huanpu", "E606");

export default [
    ModelGenerator.generateActivity("Great Dinner", host0, "Dim Sum is one of my favorite food. If you’re into pork, my kitchen will definitely hit the spot. Prepare the BBQ pork buns (which are pretty much the same as Tim Ho Wan’s), a plate of BBQ pork (char siu), and the roast pork. SO PORKIN’ GOOD!", ["images/kitchen/kitchen0.png"], 8, location0, new Date(2017, 5, 18, 12, 0), [member0, member1, member2, member3]),
    ModelGenerator.generateActivity("Funny Lunch", host1, "Cheap, dericious and also happens to be the happiest kitchen in the world! ", ["images/kitchen/kitchen1.png"], 8, location0, new Date(2017, 5, 18, 12, 0), [member4, member7, member2, member5]),
    ModelGenerator.generateActivity("Supper", host2, "A hidden kitchen recognized and recommended by a lot of peeps. This spot overall has better dim sum than Tim Ho Wan, but they don’t make those cot damn BBQ pork buns.", ["images/kitchen/kitchen2.png"], 8, location0, new Date(2017, 5, 18, 18, 0), [member7, member6, member1, member3]),
    ModelGenerator.generateActivity("Breakfast", host3, " A huge selection of seasonal seafood. People say Tung Po isn’t as not as good as it used to be… blah blah blah… but it’s the atmosphere that makes my kitchen worth checking out", ["images/kitchen/kitchen3.png"], 8, location0, new Date(2017, 5, 18, 9, 0), [member2, member1, member4, member5]),
];