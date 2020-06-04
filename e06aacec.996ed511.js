(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),l=(a(0),a(185)),b={id:"playlists",title:"Playlists",sidebar_label:"Playlists"},c={id:"version-5.1.1/web/playlists",title:"Playlists",description:"GetUserPlaylists",source:"@site/versioned_docs/version-5.1.1/web/playlists.md",permalink:"/SpotifyAPI-NET/docs/web/playlists",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/playlists.md",version:"5.1.1",lastUpdatedBy:"Andrew Novac",lastUpdatedAt:1591310443,sidebar_label:"Playlists",sidebar:"version-5.1.1/someSidebar",previous:{title:"Player",permalink:"/SpotifyAPI-NET/docs/web/player"},next:{title:"Profiles",permalink:"/SpotifyAPI-NET/docs/web/profiles"}},i=[{value:"GetUserPlaylists",id:"getuserplaylists",children:[]},{value:"GetPlaylist",id:"getplaylist",children:[]},{value:"GetPlaylistTracks",id:"getplaylisttracks",children:[]},{value:"CreatePlaylist",id:"createplaylist",children:[]},{value:"UpdatePlaylist",id:"updateplaylist",children:[]},{value:"ReplacePlaylistTracks",id:"replaceplaylisttracks",children:[]},{value:"RemovePlaylistTracks",id:"removeplaylisttracks",children:[]},{value:"RemovePlaylistTrack",id:"removeplaylisttrack",children:[]},{value:"AddPlaylistTracks",id:"addplaylisttracks",children:[]},{value:"AddPlaylistTrack",id:"addplaylisttrack",children:[]},{value:"ReorderPlaylist",id:"reorderplaylist",children:[]}],p={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"getuserplaylists"},"GetUserPlaylists"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Get a list of the playlists owned or followed by a Spotify user.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user's Spotify user ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1122095781"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[limit]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of playlists to return. Default: 20. Minimum: 1. Maximum: 50."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"20"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[offset]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The index of the first playlist to return. Default: 0 (the first object)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0"))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#playlist-object-simplified"}),"SimplePlaylist")," wrapped inside a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#paging-object"}),"Paging Object")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'Paging<SimplePlaylist> userPlaylists = _spotify.GetUserPlaylists("1122095781");\nuserPlaylists.Items.ForEach(playlist => playlist.Owner.DisplayName) //Who is the owner of the playlist?\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"getplaylist"},"GetPlaylist"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Get a playlist owned by a Spotify user.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user's Spotify user ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1122095781"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID for the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1TtEejT1y4D1WmcOnLfha2"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[fields]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"description,uri"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[market]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"DE"')))),Object(l.b)("p",null,"Returns a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#track-object-full"}),"FullTrack")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'FullPlaylist playlist = _spotify.GetPlaylist("1122095781", "1TtEejT1y4D1WmcOnLfha2");\nplaylist.Tracks.Items.ForEach(track => Console.WriteLine(track.Track.Name));\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"getplaylisttracks"},"GetPlaylistTracks"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Get full details of the tracks of a playlist owned by a Spotify user.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user's Spotify user ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1122095781"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID for the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1TtEejT1y4D1WmcOnLfha2"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[fields]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"description,uri"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[limit]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of tracks to return. Default: 100. Minimum: 1. Maximum: 100."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"100"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[offset]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The index of the first object to return. Default: 0 (i.e., the first object)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[market]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"DE"))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#playlist-object-simplified"}),"PlaylistTrack")," wrapped inside a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#paging-object"}),"Paging Object")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'Paging<PlaylistTrack> playlist = _spotify.GetPlaylistTracks("1122095781", "1TtEejT1y4D1WmcOnLfha2");\nplaylist.Items.ForEach(track => Console.WriteLine(track.Track.Name));\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"createplaylist"},"CreatePlaylist"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user's Spotify user ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1122095781"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistName"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The name for the new playlist, for example "Your Coolest Playlist". This name does not need to be unique.'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"This is my new Playlist"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[isPublic]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default true. If true the playlist will be public, if false it will be private. To be able to create private playlists, the user must have granted the playlist-modify-private scope."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true"))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#playlist-object-full"}),"FullPlaylist")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'FullPlaylist playlist = _spotify.CreatePlaylist("1122095781", "This is my new Playlist");\nif(!playlist.HasError())\n    Console.WriteLine("Playlist-URI: " + playlist.Uri);\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"updateplaylist"},"UpdatePlaylist"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Change a playlist\u2019s name and public/private state. (The user must, of course, own the playlist.)")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user's Spotify user ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1122095781"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID for the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1TtEejT1y4D1WmcOnLfha2"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[newName]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The new name for the playlist, for example "My New Playlist Title".'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"New Playlistname"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[newPublic]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true the playlist will be public, if false it will be private."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EXAMPLE")))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.UpdatePlaylist("1122095781", "1TtEejT1y4D1WmcOnLfha2", "New Name", true);\nif(!response.HasError())\n    Console.WriteLine("success");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"replaceplaylisttracks"},"ReplacePlaylistTracks"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Replace all the tracks in a playlist, overwriting its existing tracks. This powerful request can be useful for replacing tracks, re-ordering existing tracks, or clearing the playlist.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user's Spotify user ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1122095781"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID for the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1TtEejT1y4D1WmcOnLfha2"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uris"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of Spotify track URIs to set. A maximum of 100 tracks can be set in one request."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'new List<string> { "1ri6UZpjPLmTCswIXZ6Uq1" }'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.ReplacePlaylistTracks("1122095781", "1TtEejT1y4D1WmcOnLfha2", new List<string> { "1ri6UZpjPLmTCswIXZ6Uq1" });\nif(!response.HasError())\n    Console.WriteLine("success");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"removeplaylisttracks"},"RemovePlaylistTracks"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Remove one or more tracks from a user\u2019s playlist.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user's Spotify user ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1122095781"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID for the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1TtEejT1y4D1WmcOnLfha2"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uris"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"array of objects containing Spotify URI strings (and their position in the playlist). A maximum of 100 objects can be sent at once."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"(example below)"))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'//Remove multiple tracks\nErrorResponse playlist = _spotify.RemovePlaylistTracks("1122095781", "1TtEejT1y4D1WmcOnLfha2", new List<DeleteTrackUri>()\n{\n    new DeleteTrackUri("1ri6UZpjPLmTCswIXZ6Uq1"),\n    new DeleteTrackUri("47xtGU3vht7mXLHqnbaau5")\n});\n//Remove multiple tracks at their specified positions\nErrorResponse playlist = _spotify.RemovePlaylistTracks("1122095781", "1TtEejT1y4D1WmcOnLfha2", new List<DeleteTrackUri>()\n{\n    new DeleteTrackUri("1ri6UZpjPLmTCswIXZ6Uq1", 2),\n    new DeleteTrackUri("47xtGU3vht7mXLHqnbaau5", 0, 50)\n});\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"removeplaylisttrack"},"RemovePlaylistTrack"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Remove one or more tracks from a user\u2019s playlist.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user's Spotify user ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1122095781"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID for the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1TtEejT1y4D1WmcOnLfha2"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uri"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Spotify URI"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'new DeleteTrackUri("1ri6UZpjPLmTCswIXZ6Uq1")'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'//Remove all tracks with the specified URI\nErrorResponse response = _spotify.RemovePlaylistTrack("1122095781", "1TtEejT1y4D1WmcOnLfha2", new DeleteTrackUri("1ri6UZpjPLmTCswIXZ6Uq1"));\n//Remove all tracks with the specified URI and the specified positions\nErrorResponse response = _spotify.RemovePlaylistTrack("1122095781", "1TtEejT1y4D1WmcOnLfha2", new DeleteTrackUri("1ri6UZpjPLmTCswIXZ6Uq1", 0, 10, 20));\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"addplaylisttracks"},"AddPlaylistTracks"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Add one or more tracks to a user\u2019s playlist.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user's Spotify user ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1122095781"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID for the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1TtEejT1y4D1WmcOnLfha2"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uris"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of Spotify track URIs to add"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'new List<string> { "1ri6UZpjPLmTCswIXZ6Uq1" }'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[position]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The position to insert the tracks, a zero-based index"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"10"))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.AddPlaylistTracks("1122095781", "1TtEejT1y4D1WmcOnLfha2", new List<string> { "1ri6UZpjPLmTCswIXZ6Uq1" });\nif(!response.HasError())\n    Console.WriteLine("Success");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"addplaylisttrack"},"AddPlaylistTrack"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Add one or more tracks to a user\u2019s playlist.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user's Spotify user ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1122095781"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID for the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1TtEejT1y4D1WmcOnLfha2"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uri"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A Spotify Track URI"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1ri6UZpjPLmTCswIXZ6Uq1"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"position"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The position to insert the tracks, a zero-based index"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"10"))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",Object(l.b)("inlineCode",{parentName:"p"},"response.HasError()")," and ",Object(l.b)("inlineCode",{parentName:"p"},"response.Error"),")"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'ErrorResponse response = _spotify.AddPlaylistTrack("1122095781", "1TtEejT1y4D1WmcOnLfha2", "1ri6UZpjPLmTCswIXZ6Uq1");\nif(!response.HasError())\n    Console.WriteLine("Success");\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"reorderplaylist"},"ReorderPlaylist"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Reorder a track or a group of tracks in a playlist.\nMore Info: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/reorder-playlists-tracks/"}),"Reorder-Playlist"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user's Spotify user ID."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1122095781"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"playlistId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify ID for the playlist."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1TtEejT1y4D1WmcOnLfha2"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rangeStart"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The position of the first track to be reordered."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"2"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"insertBefore"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The position where the tracks should be inserted."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[rangeLength]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The amount of tracks to be reordered. Defaults to 1 if not set."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"2"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[snapshotId]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The playlist's snapshot ID against which you want to make the changes."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"``")))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Snapshot"),"-Object which contains the property ",Object(l.b)("inlineCode",{parentName:"p"},"String SnapshotId")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'Snapshot snapshot = _spotify.ReorderPlaylist("1122095781", "1TtEejT1y4D1WmcOnLfha2", 2, 0, 2);\nConsole.WriteLine("New SnapshotId: " + snapshot.SnapshotId);\n')),Object(l.b)("hr",null))}s.isMDXComponent=!0},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},j=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),j=s(a),O=n,m=j["".concat(b,".").concat(O)]||j[O]||o[O]||l;return a?r.a.createElement(m,c({ref:t},p,{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);