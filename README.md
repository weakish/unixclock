# Unix Clock

A unix time clock powered by Ionic, React, Vite, and Capacitor.

It can be deployed as a PWA, Android app, or iOS app.

I wrote this toy project to learn about Ionic and Capacitor.

## Configuration

This clock uses a hard-coded locale `en-001-u-hc-h23-ca-japanese`.
If other locales are needed, please modify the source code (`src/components/UnixClock.tsx`).

## Inspiration

> techbros be like “we should do things just based on their technical merits”
> but I don’t see any of them changing their legal names to UUIDs or setting their watches to UTC
>
> -- [Kate Temkin](https://social.vivaldi.net/@ktemkin@chaos.social/111726848001314587)

Well, UTC still has the problem of leap seconds.
Unix time is better.
