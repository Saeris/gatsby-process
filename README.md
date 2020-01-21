### Configuring the Instagram source plugin

1. You need to have a Facebook page (I know... :/)
1. Go to your site settings -> Instagram -> Login into your Instagram account
1. Create a [app](https://developers.facebook.com/apps/)
1. Go to the [Graph API Explorer][gae]
   1. Select your App from the top right dropdown menu
   1. Select "Get User Access Token" from dropdown (right of access token field) and select needed permissions (manage_pages, pages_show_list, instagram_basic)
   1. Copy user access token
1. [Access Token Debugger][atd]:
   1. Paste copied token and press "Debug"
   1. Press "Extend Access Token" and copy the generated long-lived user access token
1. [Graph API Explorer][gae]:
   1. Paste copied token into the "Access Token" field
   1. Make a GET request with "PAGE_ID?fields=access_token"
   1. Find the permanent page access token in the response (node "access_token")
1. [Access Token Debugger][atd]:
   1. Paste the permanent token and press "Debug"
   1. "Expires" should be "Never"
   1. Copy the **access token**
1. [Graph API Explorer][gae]:

   1. Make a GET request with "PAGE_ID?fields=instagram_business_account" to get your **Business ID**

Now create a `.env` file at the root of the project with the following content:

```
BUSINESS_ID=YOUR_ID
ACCESS_TOKEN=YOUR_TOKEN
```

You can paste your access token and Business ID there.

**Attention:** You also need to edit `static/robots.txt` to include your domain!

[gae]: https://developers.facebook.com/tools/explorer/
[atd]: https://developers.facebook.com/tools/debug/accesstoken/
