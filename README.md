# 🚀 Google Search Skill Pack for OpenClaw

### 为你的 AI 助手开启“上帝视角”：零成本、不限量的实时搜索方案

---

## 📖 项目简介

本项目是一套专为 [OpenClaw](https://github.com/openclaw/openclaw) 设计的**底层能力插件包 (Skills)**。它将谷歌搜索的深度获取能力与高效的网页解析技术相结合，让你的 AI 助手能够实时检索并阅读全球网页内容，彻底打破预训练数据的时间限制。

> **核心价值：** 告别昂贵的 API Key 费用，实现真正的“搜索自由”。

---

## ✨ 核心工具箱 (The Three Musketeers)

该插件包内置了三个相互协作的核心工具，形成了从 **搜索 -> 抓取 -> 内容提取** 的完整闭环：

| 工具名称 | 功能描述 | 核心亮点 |
| :--- | :--- | :--- |
| **`google-search`** | 零成本谷歌搜索接口 | **无需 API Key**，支持多语言检索，响应速度极快。 |
| **`fetch-url`** | 网页内容“脱水”提取 | 自动滤除广告和导航栏，**仅保留核心 Markdown**，极度节省 Token。 |
| **`fetch-webpage`** | 强力网页抓取工具 | 针对复杂网页设计，确保抓取数据的完整性。 |

---

## 🛠️ 为什么选择这个 Skill Pack？

1. **彻底告别收费 API**：传统的搜索集成通常依赖 Google Custom Search 或 Serper，不仅配置繁琐且费用高昂。本项目采用高效底层模拟技术，实现**零成本无限次**调用。
2. **为 LLM 优化的数据流**：AI 不需要乱七八糟的 HTML 源码。`fetch-url` 工具能将网页精准“脱水”，确保模型只处理有价值的信息，既提高了回答准确度，又节省了推理成本。
3. **OpenClaw 原生无缝集成**：无需复杂的依赖安装，直接放入 `skills` 目录即可被 OpenClaw 识别并作为助手的底层 Capability 使用。

---

## 🚀 快速安装

只需简单的两步操作，即可完成部署：

### 1. 进入技能目录
打开终端，切换到你 OpenClaw 的技能存放路径：
```bash
cd ~/.openclaw/skills
```
### 2. 克隆仓库

将本项目代码拉取到本地：

```bash
git clone [https://github.com/sixiangguo/google-search-skill-pack.git](https://github.com/sixiangguo/google-search-skill-pack.git)
```
## 💡 典型使用场景

* **实时新闻分析**：  
  > “总结过去 24 小时内关于人工智能领域的重大融资事件。”
* **深度技术调研**：  
  > “查找最新的 Python 3.12 性能优化提案，并提取核心代码示例。”
* **竞品情报收集**：  
  > “抓取特定产品的官网更新日志，对比其最新功能差异。”

---

## ⚖️ 开源协议与鸣谢

* **整理分享**：[@sixiangguo](https://github.com/sixiangguo)
* **核心框架**：基于 [OpenClaw](https://github.com/openclaw/openclaw) 生态构建。
