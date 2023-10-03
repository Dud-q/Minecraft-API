const BlocksList = JSON.parse(Blocks);
const EntitiesList = JSON.parse(Entities)

var block, entity, newPossibleBlockListElement, newPossibleEntityListElement;

for(i = 0; i<EntitiesList.length; i++){
    newPossibleEntityListElement = document.createElement("option");
    newPossibleEntityListElement.innerHTML = EntitiesList[i].displayName;
    possibleEntityList.appendChild(newPossibleEntityListElement);}
        
for(i = 0; i<BlocksList.length; i++){
    newPossibleBlockListElement = document.createElement("option");
    newPossibleBlockListElement.innerHTML = BlocksList[i].displayName;
    possibleBlocksList.appendChild(newPossibleBlockListElement);}
        
searchItemsInput.addEventListener('click',function(){
    item = BlocksList.find(function(item){
        return item.displayName == itemsInput.value;});
    itemOutput.src = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9e/Barrier_%28held%29_JE2_BE2.png";
    setTimeout(function(){
        divForItem.style.height = itemOutput.getBoundingClientRect().height + "px";
        divForItem.style.width = itemOutput.getBoundingClientRect().width + "px";
    },100);
    itemStatsHeader.innerHTML = item.displayName;
    divForName2.innerHTML = "minecraft:" + item.name;
    divForID2.innerHTML = "ID: " + item.id;
    divForhardness2.innerHTML = "Hardness: " + item.hardness;
    divForfilterLight2.innerHTML = "Filter Light: " + item.filterLight;
    divForStack2.innerHTML = "Stack Size: " + item.stackSize;
    })

searchEntitiesInput.addEventListener('click',function(){
    entity = EntitiesList.find(function(entity){
        return entity.displayName == entitiesInput.value;});
    entityOutput.src = entity.image;
    setTimeout(function(){
        divForEntity.style.height = entityOutput.getBoundingClientRect().height + "px";
        divForEntity.style.width = entityOutput.getBoundingClientRect().width + "px";
    },100);
    entityStatsHeader.innerHTML = entity.displayName;
    divForID.innerHTML = "ID: " + entity.id;
    divForHP.innerHTML = entity.hp/2 + ` <img src="Images/Images/heart" id="heart">`;
    divForCategory.innerHTML = "Category: " + entity.category;
    divForSize.innerHTML = "Size: " + entity.height + " x " + entity.width;
    divForName.innerHTML = "minecraft:" + entity.name.toLowerCase();
    
    entityStatsHeader.style.display = "flex";
    divForID.style.display = "flex";
    divForHP.style.display = "flex";
    divForCategory.style.display = "flex";
    divForSize.style.display = "flex";
    divForName.style.display = "flex";
    })
        
temp.style.display = "none";

var SkinPageFirstClick = true;
var EntitiesPageFirstClick = true;
var ItemsPageFirstClick = true;


function toggleSkinPage() {
    
			if(skinsPage.style.display == 'none' || SkinPageFirstClick == true){
				skinsPage.style.display = 'flex';
				skinsPage.classList.add('showPage');
				skinsPage.classList.remove('hidePage');
                SkinPageFirstClick = false;}
            else{
				skinsPage.classList.add('hidePage');
				skinsPage.classList.remove('showPage');
				setTimeout( ()=> {
					skinsPage.style.display = 'none';
				}, 500);
			}
		};

function toggleEntitiesPage() {
			if(entitiesPage.style.display == 'none' || EntitiesPageFirstClick == true){
				entitiesPage.style.display = 'block';
				entitiesPage.classList.add('showPage');
				entitiesPage.classList.remove('hidePage');
                EntitiesPageFirstClick = false;}
            else{
				entitiesPage.classList.add('hidePage');
				entitiesPage.classList.remove('showPage');
				setTimeout( ()=> {
					entitiesPage.style.display = 'none';
				}, 500);}};

function toggleItemsPage() {
			if(itemsPage.style.display == 'none' || ItemsPageFirstClick == true){
				itemsPage.style.display = 'block';
				itemsPage.classList.add('showPage');
				itemsPage.classList.remove('hidePage');
                ItemsPageFirstClick = false;}
            else{
				itemsPage.classList.add('hidePage');
				itemsPage.classList.remove('showPage');
				setTimeout( ()=> {
					itemsPage.style.display = 'none';
				}, 500);}};

var skinUsed;
function createSkin(nick){
    $(document).ready(function() {
        try{
            document.querySelectorAll("canvas")[0].remove();
            document.querySelectorAll("canvas")[1].remove();
            document.querySelectorAll("canvas")[2].remove();
            document.querySelectorAll("canvas")[3].remove();
            document.querySelectorAll("canvas")[4].remove();
        }
        catch(error){}
                
        var skinRender;
            skinRender = new SkinRender({
            showOutlines: false,    // Debugging - Show bounding boxes
            showAxes: false,        // Debugging - Show the scene's axes
            showGrid: false,        // Debugging - Show coordinate grid
            autoResize: false,      // Whether to automatically resize the canvas
            controls: {
                enabled: true,      // Toggle controls
                zoom: true,         // Toggle zooming
                rotate: true,       // Toggle rotation
                pan: true           // Toggle panning
            },
            camera: {               // Camera position
                x: -5,
                y: 25,
                z: 30,
                target: [0, 17, 0]   // Where the camera should look
            },
            canvas: {               // Dimensions the canvas starts off with (undefined -> use window size)
                width: divForSkin.getBoundingClientRect().width-10,
                height: divForSkin.getBoundingClientRect().height-10
            },
            pauseHidden: true,       // Whether to pause animations that aren't currently visible
    }, document.getElementById("divForSkin"));
    skinRender.render(nick);});
    try{
    setTimeout(function(){
        document.querySelector("canvas").addEventListener('mousedown',function(){
            this.style.cursor = "grabbing"; });
        document.querySelector("canvas").addEventListener('mouseup',function(){
            this.style.cursor = "grab"; });
        },500);
    setTimeout(function(){
        document.querySelector("canvas").addEventListener('mousedown',function(){
            this.style.cursor = "grabbing"; });
        document.querySelector("canvas").addEventListener('mouseup',function(){
            this.style.cursor = "grab"; });
        },1000);
    setTimeout(function(){
        document.querySelector("canvas").addEventListener('mousedown',function(){
            this.style.cursor = "grabbing"; });
        document.querySelector("canvas").addEventListener('mouseup',function(){
            this.style.cursor = "grab"; });
        },1500)
    }
    catch(error){}};

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

var currentNick;
var currentUUID;
searchPlayerInput.addEventListener('click',function(){
    currentNick = playerInput.value;
    createSkin(playerInput.value);
    getJSON('https://api.mojang.com/users/profiles/minecraft/' + playerInput.value,
            function(err, data) {
  if (err !== null) {
    UUIDoutput.innerHTML = "Invalid Username";
    random1.style.display = "none";
    copyUUID.style.display = "none";
    downloadSkinImg1.style.display = "none";
  } else {
     UUIDoutput.innerHTML = data.id;
     random1.style.display = "flex";
     copyUUID.style.display = "flex";
     downloadSkinImg1.style.display = "flex";
     currentUUID = data.id;
  }
});
});

copyUUID.addEventListener('click', function(){
    let tempInput = document.createElement('input');
    tempInput.value = UUIDoutput.innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    copyUUID.style.backgroundColor = "lightgreen";
    setTimeout(function(){
        copyUUID.style.backgroundColor = "lightblue";
    }, 250)
});

downloadSkinImg1.addEventListener('click', function(){
    window.open('https://mc-heads.net/download/' + currentUUID);
});
