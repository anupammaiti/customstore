if (CQ_Analytics.CustomStoreMgr ) {

	var storeName = "customstore";
	
    // HTML template
    CQ_Analytics.CustomStoreMgr.template = 
        "<input class='customstore-input' type='checkbox' id='customstore-input-%key%' name='%key%' value='%key%' %checked%>" +
        "<label for='customstore-input-%key%' class='%checkedClass%'>" +
        "<div class='toggle'><div class='green'></div><div class='red'></div></div>" +
        "%label%</label>";

    CQ_Analytics.CustomStoreMgr.templateRenderer = function(key, label, checked) {

         var checkedString = ""; var checkedClass = "";
         if (checked) {
             checkedString = "checked='checked'";
             checkedClass  = "checked";
         }
         var template = CQ_Analytics.CustomStoreMgr.template;
         return template.replace(/%label%/g, label)
             .replace(/%key%/g, key)
             .replace(/%checked%/g, checkedString)
             .replace(/%checkedClass%/g, checkedClass);
     }


    CQ_Analytics.CustomStoreMgr.renderer = function(store, divId) {

		$CQ("#" + divId).children().remove();

		var name = CQ_Analytics.ProfileDataMgr.getProperty("formattedName");
		var templateRenderer = CQ_Analytics.CustomStoreMgr.templateRenderer;

        // Set title
		$CQ("#" + divId).addClass("cq-cc-customstore");
		var div = $CQ("<div>").html(name + " services");
		$CQ("#" + divId).append(div);           

		var data = this.getJSON();

        var traits = data["traits"];
        if (traits) {
            for (var i in traits) {
                var value = false;
                if (typeof traits[i] === 'object') {
                    if ( traits[i]["value"] === "true") value = true;
                    $CQ("#" + divId).append(templateRenderer(traits[i]["usertrait"],traits[i]["label"],value));
                }
            }
        }
    }

<<<<<<< .mine
<<<<<<< .mine
    //$CQ(".customstore-input").change(function(){
    //    var value = false;
    //    if ($CQ(this).attr("checked")) {
    //        value = true;
    //    }
    //    var key = $CQ(this).attr("name");
    //    $CQ("label[for='customstore-input-" + key + "']").toggleClass('checked');
=======
    CQ_Analytics.CustomStoreMgr.setTraitValue = function(trait, newValue) {

        var traits = CQ_Analytics.CustomStoreMgr.data["traits"];
        if (traits) {
            for (var i in traits) {
                if (typeof traits[i] === 'object') {
                    if (traits[i]["usertrait"] === trait) traits[i]["value"] = newValue;
                }
            }
        }
    };

    $CQ.ready(function(){

		$CQ(".customstore-input").change(function(){
        	var value = false;
        	if ($CQ(this).attr("checked")) {
            	value = true;
        	}
        	var key = $CQ(this).attr("name");
        	$CQ("label[for='customstore-input-" + key + "']").toggleClass('checked');
        	var newValue = (value === true)?"true":"false";
			CQ_Analytics.CustomStoreMgr.setTraitValue(key,newValue);
        	CQ_Analytics.ProfileDataMgr.fireEvent("update");
    	});         


    });


>>>>>>> .theirs
=======
    CQ_Analytics.CustomStoreMgr.setTraitValue = function(trait, newValue) {

        var traits = CQ_Analytics.CustomStoreMgr.data["traits"];
        if (traits) {
            for (var i in traits) {
                if (typeof traits[i] === 'object') {
                    if (traits[i]["usertrait"] === trait) traits[i]["value"] = newValue;
                }
            }
>>>>>>> .theirs
        }
    };

    $CQ.ready(function(){

		$CQ(".customstore-input").change(function(){
        	var value = false;
        	if ($CQ(this).attr("checked")) {
            	value = true;
        	}
        	var key = $CQ(this).attr("name");
        	$CQ("label[for='customstore-input-" + key + "']").toggleClass('checked');
        	var newValue = (value === true)?"true":"false";
			CQ_Analytics.CustomStoreMgr.setTraitValue(key,newValue);
        	CQ_Analytics.ProfileDataMgr.fireEvent("update");
    	});         


    });



}