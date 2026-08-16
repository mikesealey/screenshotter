import {test, expect} from "@playwright/test"

const url = "https://x.com/PaulSchleifer/status/2088708802501644481?s=46"
const tweetID = "2088708802501644481"


test('takes screenshot', async ({ page }) => {
    await page.goto(url)
    const tweet = page.locator(`article[data-tweet-id="${tweetID}"]`) // Get this from the URL

    await expect(tweet).toBeVisible()
    
    await tweet.screenshot({ path: `screenshots/${tweetID}.jpg` })
})