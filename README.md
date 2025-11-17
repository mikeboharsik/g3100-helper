# What
Facilitates programmatic interactions with the Verizon Fios G3100 Internet router

# Why
I hate using the UI to access my router information and there are situations where programmatic access is desirable.

# Why puppeteer
I initially wanted to reverse-engineer how the router's client implements its auth flow but
1. they seem to have made arbitrarily dumb decisions that coincidentally make it more difficult to reverse-engineer (e.g. hashing the password on the client before sending it to the backend)
2. even if I recreated the client behavior in my own library, there is a decent chance that a future router update would render all the reverse-engineering work pointless

I understand it's kinda crazy to use a headless browser just to access some router data, but it strikes me as being the least brittle long-term solution. And if the implementation breaks, it should be a simple matter of updating some selectors.

# Usage
Set the environment variable `G3100_PASSWORD` to the password of the `admin` user of the router. You can do this via command line or by populating a `.env` file in the root of the importing application with something like this:
```
G3100_PASSWORD="SOME VALUE THAT IS MORE SECURE THAN THIS"
```

Then relevant functions can be imported as follows:
```
import { getLocalIpAddresses, getPublicIpAddress } from 'g3100-helper';

const localIpAddresses = await getLocalIpAddresses();
const publicIpAddress = await getPublicIpAddress();
console.log({ localIpAddresses, publicIpAddress });
```