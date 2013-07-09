
// Create the session store called "customstore"
if (!CQ_Analytics.CustomStoreMgr ) {

 // Create the session store as a JSONStore
 CQ_Analytics.CustomStoreMgr = CQ_Analytics.JSONStore.registerNewInstance("customstore");

 // Function to load the data for the current user
 CQ_Analytics.CustomStoreMgr.loadData = function() {

  console.info("Loading CustomStoreMgr data");

  var authorizableId = CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
  var url = "/apps/customstore/components/loader.json";

  url = CQ_Analytics.Utils.addParameter(url, "authorizableId", authorizableId);

  try
  {

   var object = CQ.shared.HTTP.eval(url);
   if (object) {
    this.data = {};
    for (var d in object) {
     this.data[d] = object[d];
    }
   }

  } catch(error) {
   console.log("Error", error);
  }
 };

}