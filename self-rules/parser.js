module.exports.parse = (raw, { yaml }) => {

  const rawObj = yaml.parse(raw)
  let allNode = [];
  for (i in rawObj) {
    allNode.push(i.proxies.name)
  }

  const groups = [
    {
      "name": "🐟漏网之鱼",
      "type": "select",
      "proxies": [
        "DIRECT",
        "PROXY"
      ]
    },
    {
      "name": "🚀不时之需",
      "type": "select",
      "proxies": [
        "DIRECT",
        "PROXY"
      ]
    },
    {
      "name": "PROXY",
      "type": "select",
      "proxies": [
        "🤖自动节点",
        "🎯手动节点"
      ]
    },
    {
      "name": "🤖自动节点",
      "type": "url-test",
      "url": "http://www.gstatic.com/generate_204",
      "interval": 300,
      "olerance": 50,
      "proxies": allNode
    },
    {
      "name": "🎯手动节点",
      "type": "select",
      "proxies": allNode
    },
    {
      "name": "⛔广告拦截",
      "type": "select",
      "proxies": [
        "REJECT",
        "DIRECT",
        "PROXY"
      ]
    }
  ]
  const rules = [
    "RULE-SET,reject,⛔广告拦截",
    "RULE-SET,direct,DIRECT",
    "RULE-SET,cncidr,DIRECT",
    "RULE-SET,private,DIRECT",
    "RULE-SET,lancidr,DIRECT",
    "GEOIP,LAN,DIRECT",
    "GEOIP,CN,DIRECT",
    "RULE-SET,selfdomain,🚀不时之需",
    "RULE-SET,tld-not-cn,🚀不时之需",
    "RULE-SET,selfapp,🚀不时之需",
    "RULE-SET,applications,🚀不时之需",
    "RULE-SET,google,🚀不时之需",
    "RULE-SET,icloud,🚀不时之需",
    "RULE-SET,apple,🚀不时之需",
    "RULE-SET,gfw,PROXY",
    "RULE-SET,greatfire,PROXY",
    "RULE-SET,telegramcidr,PROXY",
    "RULE-SET,proxy,PROXY",
    "MATCH,🐟漏网之鱼"
  ]
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
  const proxyProviders = {}
  return yaml.stringify({ ...rawObj, 'proxy-groups': groups, 'rules': rules, 'proxy-providers': proxyProviders, 'rule-providers': ruleProviders })
}
