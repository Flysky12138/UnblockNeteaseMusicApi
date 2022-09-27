# UnblockNeteaseMusicApi

## 使用

```bash
git clone https://github.com/Flysky12138/UnblockNeteaseMusicApi.git
cd UnblockNeteaseMusicApi
yarn
```

双击 `Start.bat` 运行。访问 `http://127.0.0.1:3001/?id=418602084` 可获得对应歌曲直链（id：网易云音乐的ID）

### 可选

向 `Start.bat` 文件中添加 `cookie`（修改其中的 `??`）。[更多环境变量](https://github.com/UnblockNeteaseMusic/server#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)

## 开机自启

修改 `Start.vbs` 文件中对应 `Start.bat` 的路径，然后创建 `Start.vbs` 的快捷键，将快捷键放入 `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp`

## 依赖

[UnblockNeteaseMusic](https://github.com/UnblockNeteaseMusic/server)
