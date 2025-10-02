//@input Component.ScriptComponent friendsCarousel
//@input Component.ScriptComponent friendsComponent

//@input Component.ScriptComponent uiButton

script. friendsCarousel.onItemSelected.add(onItemSelected)

function onItemSelected(){
print(script.friendsCarousel.getSelectedIndex());
}
let friends;

async function init(){
friends = await script. friendsComponent.friends();
print(friends)

friends.forEach(element => {
print(element.displayName)

});

script.uiButton.onPressUp.add(onButtonPress);

}

function onButtonPress(){
print("Button Press")
print(friends[script.friendsCarousel.getSelectedIndex()].displayName)
}

init();