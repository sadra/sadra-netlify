---
template: BlogPost
path: /how-to-detect-when-app-moves-to-background-or-foreground
date: 2018-12-24T08:30:45.596Z
title: How to detect when app moves to background or foreground
metaDescription: >-
  If you want to know how your app is going to the background, or it's coming to
  the foreground, this is post will help to figure out this issue
thumbnail: /assets/mb1lkat8i52iz89gvm9a.jpg
---


As we know, there is implemented some methods for triggering an application's lifecycle:

![iOS Application Lifecycle](https://thepracticaldev.s3.amazonaws.com/i/fnqvclt37o2kd1pnhdr0.png)

There is an issue. These methods didn't help us when the app moves to background or foreground! it just shows us the one-time creation of UIViewControl or process of destroying.

But as the guides in [docs](https://developer.apple.com/library/content/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/StrategiesforHandlingAppStateTransitions/StrategiesforHandlingAppStateTransitions.html) there is more information about application lifecycle.

When your app goes to background, The Cocoa broadcasts a notification with the message of the app is moving to the background. So, if your app or your UIViewController registered for this notification, you can be aware when your app moves to background:

![iOS Application Moves to Background](https://thepracticaldev.s3.amazonaws.com/i/8ylzau8kcf4pg76pv3s5.png)

As the same, for Moving to Foreground, we have a notification too:

![iOS Application Moves to Foreground](https://thepracticaldev.s3.amazonaws.com/i/dgmk2jju7w6v793fwzsx.png)

So, you have two ways to detect when your app moves to background or foreground:

### In AppDelegate

That implemented by default in app delegation, and you can use these default methods for the issue:

```swift
func applicationDidEnterBackground(_ application: UIApplication) {
    print("applicationDidEnterBackground")
}

func applicationWillEnterForeground(_ application: UIApplication) {
    print("applicationWillEnterForeground")
}
```

### In UIViewController

If you want to detect it in a UIViewController manually, you should register for the `UIApplicationWillEnterForeground` or `UIApplicationDidEnterBackground` notification anywhere in your app. That it's triggered when the user pressed the home button and it moves to the background, and then pressed double and choose app so it moves to the foreground.

- foreground

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    let notificationCenter = NotificationCenter.default
    notificationCenter.addObserver(self, selector: #selector(appMovedToBackground), name: Notification.Name.UIApplicationWillEnterForeground, object: nil)
}

func appMovedToForeground() {
    print("App moved to ForeGround!")
}
```

- Background

```swift
override func viewDidLoad() {
    super.viewDidLoad()

    let notificationCenter = NotificationCenter.default
    notificationCenter.addObserver(self, selector: #selector(appMovedToBackground), name: Notification.Name.UIApplicationDidEnterBackground, object: nil)
}

func appMovedToBackground() {
    print("App moved to Background!")
}
```

Did this solution work for you? Please pass it on! **[Tweet](https://twitter.com/share)**
