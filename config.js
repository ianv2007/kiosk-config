/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	
	electronOptions: {
    		webPreferences: {
      		webviewTag: true,
    		},
  	},

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_right",
			config: {
				lat: 41.368092,
				lon: -89.4648145
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 41.368092,
				lon: -89.4648145,
				degreeLabel: true,
				showHumidity: "wind"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 41.368092,
				lon: -89.4648145,
				degreeLabel: true,
				colored: true
			}
		},
		{
			module: "MMM-OnThisDayWikiApi",
			position: "bottom_left",
			header: "On This Day",
			config: {
				showAsList: true,
				updateInterval: 20000
			}
		},
		{
      		module: 'MMM-WebView',
      		position: 'top_center',
      		header: "Amtrak Arrival/Departure Times",
      		config: {
        			url: 'https://asm.transitdocs.com/station/PCT',
        			width: '500px',
        			height: '550px',
        			autoRefresh: true
     		 },
    		},
		{
			module: "MMM-OnlineImagesViewer",
			position: "top_left",
			header: "Princeton Now",
			config: {
				images: [
					"https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/9e0c8cc8-0c68-41db-b6f9-4c62ef96010d/thumb_IMG_8397.jpeg"
				],
				random: false,
				updateInterval: 60 * 5 * 1000, // every 5 mins
				showAll: true,
				maxWidth: "300px",
				numColumns: 1
			}
		},
		{
			module: "MMM-OnlineImagesViewer",
			position: "top_left",
			header: "ReadyBureau",
			config: {
				images: [
					"https://ema.bureaucounty-il.gov/wp-content/uploads/2016/10/Bureau-County-EMA-app-1-640x313.png"
				],
				random: false,
				updateInterval: 60 * 5 * 1000, // every 5 mins
				showAll: true,
				maxWidth: "300px",
				numColumns: 1
			}
		},
		{
			module: "MMM-OnlineImagesViewer",
			position: "bottom_right",
			header: "Midwest Partners",
			config: {
				images: [
					"https://images.squarespace-cdn.com/content/v1/61dde537f47de32dfd366591/0064c9be-933a-46e8-b7d0-9043cc183110/Landing+Page.jpg?format=1500w"
				],
				random: false,
				updateInterval: 60 * 5 * 1000, 
				maxWidth: "250px",
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
