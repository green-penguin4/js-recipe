const Name = {
  name: "うね",
  university: "早稲田大学",
  age: 21,
  hobby: ["絵を描く", "裁縫", "美術館巡り", "カフェ巡り"],
  animal: "ペンギン",
  mybrothers: {
    olderName: "だいき",
    yongerName: "りょう",
  },
  isMentor: false,
  sayHello: function() {
    alert(`はじめまして${this.name}です!!`)
  },
}
console.log(Name.name)
Name.sayHello()
