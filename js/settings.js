var bckg = "red";

var colorsArr = new Array ( ["Red (default)", red],
                            ["Blue", blue],
                            ["Green", green],
                            ["Orange", orange],
                            ["Purple", purple],
                            ["Light Blue", light_blue],
                            ["Light Green", light_green ] );


function initSettings()	
{
    System.Gadget.settingsUI = "settings.html";
}

function loadSetts()
{
  	ddgSets = new GetDDGSettings();	
	  colors.value = ddgSets.background; 
    //addOptions();
	  //setDefaultValue(ddgSets);
    System.Gadget.onSettingsClosing = CloseSets;

}

function GetDDGSettings()
{
    this.background = System.Gadget.Settings.read("background");
}

function addOptions()
{   
    for(var i = 0; i < colorsArr.length; i++){
		    colors.options[i] = new Option(colorsArr[i][0], colorsArr[i][1]);
		    colors.options[i].title = colorsArr[i][0];
	  }
}
/*
function setDefaultValue(ddgSets)
{
    switch (ddgSets.background)
    {
        case "Red (default)":
            pass
        case "Blue":
            pass
        case "Green":
            pass
        case "Orange":
            pass
        case "Purple":
            pass
        case "Light Blue":
            pass
        case "Light Green":
            pass
        default:
            colors.options[0] = ""
    }
}*/


function SaveSettings()
{ 
    System.Gadget.Settings.writeString("Background", colors.value);
    ddgSets.background = colors.value;
	  setSettings();
}

function setSettings()
{
    var bckg = document.getElementById('header');
    bckg.style.backgroundImage = 'url("css/imgs/bckgs/' + bckg +'.png") repeat-x scroll 0 0 #CD473B';
    bckg.style.backgroundRepeat = "repeat-x scroll 0 0 #CD473B";
}


//when the Settings are closing
function CloseSets(event)
{
	if (event.closeAction == event.Action.commit){
		SaveSettings();
	}else if(event.closeAction == event.Action.cancel){
	}
	event.cancel = false;
}
