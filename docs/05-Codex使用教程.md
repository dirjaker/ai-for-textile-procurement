# 第五章：Codex 使用教程

> 从安装到实战的完整指南

---

## 一、什么是 Codex？

### 1.1 简单介绍

**Codex** 是 OpenAI 推出的 AI 编程助手，能够：
- 理解自然语言指令
- 生成和执行代码
- 处理文件和数据
- 自动化任务

**类比：**
- ChatGPT = 能聊天的 AI
- Codex = 能聊天还能写代码、运行代码的 AI

### 1.2 Codex vs ChatGPT

| 特性 | ChatGPT | Codex |
|------|---------|-------|
| 对话能力 | ✅ 强 | ✅ 强 |
| 代码生成 | ✅ 能写 | ✅ 能写 |
| 代码执行 | ❌ 不能 | ✅ 能运行 |
| 文件操作 | ⚠️ 有限 | ✅ 完整 |
| 本地运行 | ❌ 不能 | ✅ 能 |
| 环境访问 | ❌ 不能 | ✅ 能访问你的电脑 |

### 1.3 为什么选择 Codex？

**适合你的场景：**
- ✅ 你不想学编程，但想让 AI 帮你处理数据
- ✅ 你有很多 Excel 文件需要处理
- ✅ 你想自动化一些重复性工作
- ✅ 你想让 AI 直接帮你完成任务，而不是只给建议

---

## 二、安装准备

### 2.1 系统要求

| 系统 | 要求 |
|------|------|
| **操作系统** | Windows 10+ / macOS 10.15+ / Linux |
| **Node.js** | 18.0 或更高版本 |
| **内存** | 8GB 以上推荐 |
| **网络** | 需要访问 OpenAI API |

### 2.2 注册 OpenAI 账号

**步骤 1：访问 OpenAI 官网**
```
https://platform.openai.com
```

**步骤 2：注册账号**
- 点击 "Sign Up"
- 使用邮箱或 Google 账号注册
- 完成邮箱验证

**步骤 3：获取 API Key**
- 登录后，进入 "API Keys" 页面
- 点击 "Create new secret key"
- 复制并保存好这个 Key（只显示一次）

**注意：** 
- API Key 是付费的，需要绑定信用卡
- Codex 按使用量计费
- 建议先充值 $5-10 测试

### 2.3 安装 Node.js

**Windows：**
1. 访问 https://nodejs.org
2. 下载 LTS 版本
3. 双击安装，一路 Next
4. 打开命令提示符，输入 `node -v` 验证

**macOS：**
```bash
# 使用 Homebrew（推荐）
brew install node

# 或者访问 https://nodejs.org 下载安装包
```

**Linux (Ubuntu/Debian)：**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**验证安装：**
```bash
node -v
# 应该显示 v18.x.x 或更高

npm -v
# 应该显示 9.x.x 或更高
```

---

## 三、安装 Codex

### 3.1 使用 npm 安装

打开终端（Windows 用命令提示符或 PowerShell），运行：

```bash
npm install -g @openai/codex
```

**如果遇到权限问题：**

Windows（以管理员身份运行 PowerShell）：
```powershell
npm install -g @openai/codex
```

macOS/Linux：
```bash
sudo npm install -g @openai/codex
```

### 3.2 验证安装

```bash
codex --version
# 应该显示版本号，如 0.1.0
```

### 3.3 配置 API Key

**方法一：环境变量（推荐）**

Windows（PowerShell）：
```powershell
$env:OPENAI_API_KEY="你的API密钥"
```

Windows（永久设置）：
```powershell
[System.Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "你的API密钥", "User")
```

macOS/Linux：
```bash
# 临时设置
export OPENAI_API_KEY="你的API密钥"

# 永久设置（添加到 ~/.bashrc 或 ~/.zshrc）
echo 'export OPENAI_API_KEY="你的API密钥"' >> ~/.bashrc
source ~/.bashrc
```

**方法二：配置文件**

创建 `~/.openai/credentials.json`：
```json
{
  "api_key": "你的API密钥"
}
```

### 3.4 测试 Codex

```bash
codex "创建一个 hello.py 文件，打印 Hello World"
```

如果一切正常，Codex 会：
1. 创建 `hello.py` 文件
2. 写入代码
3. 运行并显示 "Hello World"

---

## 四、基本使用

### 4.1 交互模式

**启动交互模式：**
```bash
codex
```

**示例对话：**
```
> 帮我创建一个 Python 脚本，计算 1 到 100 的和

Codex: 我来创建这个脚本...
[自动创建 sum.py 并运行]

结果：5050
```

### 4.2 直接执行模式

**一次执行一个任务：**
```bash
codex "你的指令"
```

**示例：**
```bash
# 创建文件
codex "创建一个 README.md，写上项目说明"

# 处理数据
codex "分析 data.csv，计算各列的平均值"

# 运行脚本
codex "运行 test.py 并显示结果"
```

### 4.3 常用指令示例

#### 文件操作

```bash
# 创建文件
codex "创建 config.json，包含数据库配置"

# 读取文件
codex "读取 README.md 并总结内容"

# 修改文件
codex "把 main.py 里的 print 语句改成 logging"
```

#### 数据处理

```bash
# 分析 Excel
codex "分析 sales.xlsx，按月份统计销售额"

# 数据清洗
codex "清洗 data.csv，删除空行和重复行"

# 生成图表
codex "根据 data.csv 生成销售趋势图"
```

#### 编程任务

```bash
# 写代码
codex "写一个 Python 函数，计算两个日期之间的工作日"

# 调试代码
codex "修复 bug.py 里的错误"

# 代码重构
codex "重构 utils.py，提高代码可读性"
```

#### 系统任务

```bash
# 文件管理
codex "整理 downloads 文件夹，按文件类型分类"

# 网络请求
codex "爬取这个网页的数据并保存到 CSV"

# 自动化
codex "每天自动备份 database.db"
```

---

## 五、进阶使用

### 5.1 处理复杂任务

**任务分解：**
```
复杂任务
    │
    ├── 步骤 1：数据收集
    ├── 步骤 2：数据清洗
    ├── 步骤 3：数据分析
    ├── 步骤 4：生成报告
    └── 步骤 5：可视化
```

**示例：分析采购数据**
```bash
codex "帮我完成以下任务：
1. 读取 purchase_2024.xlsx
2. 清洗数据，删除无效行
3. 按供应商分组统计总金额
4. 找出金额最高的 10 家供应商
5. 生成柱状图
6. 保存结果到 result.xlsx 和 chart.png"
```

### 5.2 使用上下文

**在当前目录工作：**
```bash
cd /path/to/your/project
codex "分析当前目录下的所有 CSV 文件"
```

**指定文件：**
```bash
codex "读取 /path/to/data.csv 并分析"
```

### 5.3 交互式调试

如果任务出错，可以继续对话：

```bash
codex
> 分析 data.csv
[如果出错]
> 错误是什么？怎么修复？
[AI 会分析错误并提供解决方案]
> 修复它
[AI 自动修复]
```

### 5.4 保存和复用

**保存常用指令：**

创建 `aliases.sh`：
```bash
# 数据分析快捷指令
alias analyze="codex '分析当前目录的 CSV 文件'"
alias report="codex '生成月度报告'"
alias clean="codex '清洗数据文件'"
```

**使用：**
```bash
source aliases.sh
analyze
report
```

---

## 六、连接国产模型（使用 cc-switch）

### 6.1 为什么使用国产模型？

**优势：**
- ✅ 无需科学上网
- ✅ 价格更便宜（DeepSeek 是 GPT-4 的 1/10）
- ✅ 中文理解更好
- ✅ 响应速度更快（国内服务器）

**推荐模型：**
- DeepSeek（性价比最高）
- 通义千问（阿里，稳定）
- 智谱 GLM（清华背景）

### 6.2 什么是 cc-switch？

**cc-switch** 是一个工具，让 Codex 可以使用非 OpenAI 的模型。

**原理：**
```
原本：Codex → OpenAI API → GPT-4
使用 cc-switch：Codex → cc-switch → 国产模型 API
```

### 6.3 安装 cc-switch

**方法一：使用 pip（推荐）**

```bash
pip install cc-switch
```

**方法二：从 GitHub 安装**

```bash
git clone https://github.com/cc-switch/cc-switch.git
cd cc-switch
pip install -e .
```

### 6.4 配置 DeepSeek

**步骤 1：注册 DeepSeek 账号**

1. 访问 https://platform.deepseek.com
2. 注册账号
3. 获取 API Key

**步骤 2：配置 cc-switch**

创建配置文件 `~/.cc-switch/config.yaml`：
```yaml
providers:
  deepseek:
    api_key: "你的DeepSeek API密钥"
    base_url: "https://api.deepseek.com"
    model: "deepseek-chat"
  
  # 可以添加多个提供商
  qwen:
    api_key: "你的通义千问API密钥"
    base_url: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    model: "qwen-max"

default_provider: deepseek
```

**步骤 3：启动 cc-switch**

```bash
cc-switch start
```

**步骤 4：配置 Codex 使用 cc-switch**

设置环境变量：
```bash
# Linux/macOS
export OPENAI_API_BASE="http://localhost:8080/v1"
export OPENAI_API_KEY="any-key"  # cc-switch 会处理实际的 key

# Windows PowerShell
$env:OPENAI_API_BASE="http://localhost:8080/v1"
$env:OPENAI_API_KEY="any-key"
```

### 6.5 使用 DeepSeek 的 Codex

```bash
# 现在 Codex 会使用 DeepSeek 模型
codex "帮我分析这个 Excel 文件"
```

### 6.6 切换模型

```bash
# 查看可用模型
cc-switch list

# 切换到通义千问
cc-switch use qwen

# 切换回 DeepSeek
cc-switch use deepseek
```

### 6.7 其他国产模型配置

#### 通义千问

```yaml
providers:
  qwen:
    api_key: "你的API密钥"
    base_url: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    model: "qwen-max"
```

**获取 API Key：**
1. 访问 https://dashscope.aliyun.com
2. 注册阿里云账号
3. 开通 DashScope 服务
4. 创建 API Key

#### 智谱 GLM

```yaml
providers:
  glm:
    api_key: "你的API密钥"
    base_url: "https://open.bigmodel.cn/api/paas/v4"
    model: "glm-4"
```

**获取 API Key：**
1. 访问 https://open.bigmodel.cn
2. 注册账号
3. 创建 API Key

#### 文心一言

```yaml
providers:
  ernie:
    api_key: "你的API密钥"
    secret_key: "你的Secret Key"
    base_url: "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop"
    model: "ernie-4.0"
```

---

## 七、采购实战案例

### 7.1 案例一：分析供应商数据

**需求：** 分析 50 家供应商的报价，找出性价比最高的

**步骤：**

```bash
# 1. 准备数据文件
# 将供应商报价整理成 Excel 文件 suppliers.xlsx
# 包含列：供应商名称、产品、单价、质量评分、交期

# 2. 使用 Codex 分析
codex "分析 suppliers.xlsx，完成以下任务：
1. 计算每家供应商的性价比指数（质量/价格）
2. 按性价比排序
3. 找出前 10 名
4. 生成对比图表
5. 保存到 analysis_result.xlsx"
```

**Codex 会自动：**
- 读取 Excel 文件
- 进行计算和分析
- 生成图表
- 保存结果

### 7.2 案例二：生成采购报告

**需求：** 每月自动生成采购报告

```bash
codex "根据 purchase_log.xlsx 生成月度采购报告，包括：
1. 本月采购总额和同比增长
2. 各品类采购金额占比（饼图）
3. 供应商采购金额排名（前 10）
4. 价格趋势分析（折线图）
5. 主要发现和建议

保存为 report_monthly.docx"
```

### 7.3 案例三：价格监控

**需求：** 监控原材料价格变化

```bash
codex "创建一个 Python 脚本 price_monitor.py：
1. 从 price_data.csv 读取价格数据
2. 计算 7 天、30 天移动平均
3. 检测价格异常波动（超过 2 个标准差）
4. 生成价格趋势图
5. 如果有异常，发送邮件提醒

使用 schedule 库每天运行一次"
```

### 7.4 案例四：合同条款提取

**需求：** 从多份合同中提取关键条款

```bash
# 准备合同 PDF 文件到 contracts 文件夹

codex "处理 contracts 文件夹中的所有 PDF 合同：
1. 提取每份合同的关键条款：
   - 产品规格
   - 价格条款
   - 交货期
   - 付款方式
   - 违约责任
2. 整理成 Excel 表格
3. 标记有风险的条款
4. 保存到 contract_summary.xlsx"
```

### 7.5 案例五：供应商评估系统

**需求：** 建立自动化的供应商评估系统

```bash
codex "创建供应商评估系统 supplier_eval.py：
1. 读取 supplier_data.xlsx（包含质量、价格、交期等数据）
2. 计算综合评分：
   - 质量：30%
   - 价格：25%
   - 交期：20%
   - 服务：15%
   - 技术：10%
3. 生成评估报告
4. 自动分级：A/B/C/D
5. 输出改进建议

运行并保存结果"
```

---

## 八、常见问题解决

### 8.1 安装问题

**问题：** `npm install` 失败

**解决：**
```bash
# 清理缓存
npm cache clean --force

# 重试
npm install -g @openai/codex

# 如果还是失败，使用 yarn
npm install -g yarn
yarn global add @openai/codex
```

**问题：** `codex` 命令找不到

**解决：**
```bash
# 检查 npm 全局安装路径
npm config get prefix

# 将路径添加到 PATH
# Windows: 添加到系统环境变量
# Linux/macOS: 添加到 ~/.bashrc
export PATH="$PATH:$(npm config get prefix)/bin"
```

### 8.2 API 问题

**问题：** API Key 无效

**解决：**
1. 检查 API Key 是否正确复制
2. 确认账户有余额
3. 检查 API Key 是否过期

**问题：** 连接超时

**解决：**
1. 检查网络连接
2. 如果在国内，考虑使用代理或国产模型
3. 增加超时设置

### 8.3 使用问题

**问题：** Codex 生成的代码有错误

**解决：**
```bash
# 1. 让 Codex 修复
codex "修复刚才生成的代码中的错误"

# 2. 手动修改后让 Codex 继续
codex "我已经修复了错误，请继续完成任务"

# 3. 重新开始
codex "重新生成这个脚本，避免之前的错误"
```

**问题：** 任务太复杂，Codex 处理不好

**解决：**
```bash
# 分解任务，一步一步来
codex "第一步：读取数据文件"
codex "第二步：清洗数据"
codex "第三步：分析数据"
codex "第四步：生成报告"
```

---

## 九、最佳实践

### 9.1 提问技巧

**好的提问：**
```bash
# 明确、具体、有上下文
codex "读取 /home/user/data/purchase.xlsx，
按供应商分组统计总金额，
找出金额最高的 5 家，
生成柱状图保存为 top5.png"
```

**不好的提问：**
```bash
# 太模糊
codex "分析数据"

# 没有上下文
codex "处理这个文件"
```

### 9.2 安全注意事项

1. **不要在 Codex 中处理敏感信息**
   - 避免处理包含密码、密钥的文件
   - 注意数据脱敏

2. **定期更新**
   ```bash
   npm update -g @openai/codex
   ```

3. **备份重要文件**
   - 使用前备份原始数据
   - 使用版本控制（Git）

### 9.3 效率提升

1. **创建常用指令模板**
2. **使用批处理**
3. **结合其他工具**（Excel、Python、数据库）
4. **建立个人知识库**

---

## 十、学习资源

### 10.1 官方资源

- **OpenAI 官方文档**：https://platform.openai.com/docs
- **Codex GitHub**：https://github.com/openai/codex

### 10.2 中文资源

- **DeepSeek 官方文档**：https://platform.deepseek.com/api-docs
- **通义千问文档**：https://help.aliyun.com/zh/dashscope/

### 10.3 社区资源

- **GitHub**：搜索 "codex tutorial"
- **知乎**：搜索 "Codex 使用教程"
- **B站**：搜索 "Codex 入门"

---

## 总结

### 关键要点

1. **Codex 是什么**：能理解和执行代码的 AI 助手

2. **安装步骤**：
   - 安装 Node.js
   - 安装 Codex (`npm install -g @openai/codex`)
   - 配置 API Key

3. **基本使用**：
   - 交互模式：`codex`
   - 直接执行：`codex "指令"`

4. **连接国产模型**：
   - 安装 cc-switch
   - 配置 DeepSeek/通义千问
   - 享受更便宜、更快的服务

5. **采购应用**：
   - 数据分析
   - 报告生成
   - 价格监控
   - 合同处理

### 下一步

现在你已经掌握了 Codex 的使用，接下来我们将学习：
- **第六章**：Prompt Engineering（提问的艺术）
- **第七章**：采购行业面试题

---

*记住：Codex 是你的"编程助手"，你不需要懂编程，只需要告诉它你想做什么！*
