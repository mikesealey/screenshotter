
import { chromium } from "@playwright/test"

const tweetUrl = "https://x.com/PaulSchleifer/status/2088708802501644481?s=46"

async function screenshotTweet(url) {
    const tweetID = url.match(/status\/(\d+)/)[1]

    const browser = await chromium.launch()
    const page = await browser.newPage()
    
    await page.goto(url)

    const tweet = page.locator(`article[data-tweet-id="${tweetID}"]`)

    await tweet.waitFor({ stat: "visible" })
    
    await tweet.screenshot({ path: `screenshots/${tweetID}.jpg` })

    await browser.close()
}

screenshotTweet(tweetUrl)