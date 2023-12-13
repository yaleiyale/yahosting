function main(params) {
  if (!params.proxies) return params
  let proxies = []
  params.proxies.forEach(proxy => {
    proxies.push(proxy.name)
  })
  const groups = [
    {
      "name": "🚀不时之需",
      "type": "select",
      "proxies": [
        "DIRECT",
        "✨代理模式"
      ]
    },
    {
      "name": "🐟漏网之鱼",
      "type": "select",
      "proxies": [
        "DIRECT",
        "✨代理模式"
      ]
    },
    {
      "name": "✨代理模式",
      "type": "select",
      "proxies": [
        "🤖自动选择",
        "🎯手动选择"
      ]
    },
    {
      "name": "🤖自动选择",
      "type": "url-test",
      "url": "http://www.gstatic.com/generate_204",
      "interval": 300,
      "olerance": 50,
      "proxies": proxies
    },
    {
      "name": "🎯手动选择",
      "type": "select",
      "proxies": proxies
    },
    {
      "name": "⛔️广告拦截",
      "type": "select",
      "proxies": [
        "REJECT",
        "DIRECT",
        "✨代理模式"
      ]
    }
  ]
  const rules = [
    "RULE-SET,reject,⛔️广告拦截",
    "RULE-SET,direct,DIRECT",
    "RULE-SET,cncidr,DIRECT",
    "RULE-SET,private,DIRECT",
    "RULE-SET,lancidr,DIRECT",
    "RULE-SET,selfapp,DIRECT",
    "GEOIP,LAN,DIRECT",
    "GEOIP,CN,DIRECT",
    "RULE-SET,selfdomain,🚀不时之需",
    "RULE-SET,tld-not-cn,🚀不时之需",
    "RULE-SET,applications,🚀不时之需",
    "RULE-SET,google,🚀不时之需",
    "RULE-SET,icloud,🚀不时之需",
    "RULE-SET,apple,🚀不时之需",
    "DOMAIN-SUFFIX,hockeyapp.net,✨代理模式", //Spark
    "DOMAIN-SUFFIX,firebaseio.com,✨代理模式", //Spark
    "DOMAIN,usage.readdle.com,✨代理模式", // spark
    "DOMAIN,api.amplitude.com,✨代理模式", // spark
    "DOMAIN,app.smartmailcloud.com,✨代理模式", // spark
    "RULE-SET,gfw,✨代理模式",
    "RULE-SET,greatfire,✨代理模式",
    "RULE-SET,telegramcidr,✨代理模式",
    "RULE-SET,proxy,✨代理模式",
    "MATCH,🐟漏网之鱼"
  ]

  params['proxy-groups'] = groups
  params['rules'] = rules
  params['rule-providers'] = ruleProviders
  return params
}

const ruleProviders = {
  "reject": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/reject.yaml",
    "interval": 86400
  },
  "icloud": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/icloud.yaml",
    "interval": 86400
  },
  "apple": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/apple.yaml",
    "interval": 86400
  },
  "google": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/google.yaml",
    "interval": 86400
  },
  "proxy": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/proxy.yaml",
    "interval": 86400
  },
  "direct": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/direct.yaml",
    "interval": 86400
  },
  "private": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/private.yaml",
    "interval": 86400
  },
  "gfw": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/gfw.yaml",
    "interval": 86400
  },
  "greatfire": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt",
    "path": "./ruleset/greatfire.yaml",
    "interval": 86400
  },
  "tld-not-cn": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/tld-not-cn.yaml",
    "interval": 86400
  },
  "telegramcidr": {
    "type": "http",
    "behavior": "ipcidr",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/telegramcidr.yaml",
    "interval": 86400
  },
  "cncidr": {
    "type": "http",
    "behavior": "ipcidr",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/cncidr.yaml",
    "interval": 86400
  },
  "lancidr": {
    "type": "http",
    "behavior": "ipcidr",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/lancidr.yaml",
    "interval": 86400
  },
  "applications": {
    "type": "http",
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/applications.yaml",
    "interval": 86400
  },
  "selfdomain": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/yaleiyale/yahosting@main/self-rules/selfdomain.txt",
    "path": "./ruleset/selfdomain.yaml",
    "interval": 86400
  },
  "selfapp": {
    "type": "http",
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/yaleiyale/yahosting@main/self-rules/selfapp.txt",
    "path": "./ruleset/selfapp.yaml",
    "interval": 86400
  }
}
