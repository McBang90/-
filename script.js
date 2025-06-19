document.addEventListener('DOMContentLoaded', async () => {
    const app = document.getElementById('app');
    
    // 初始化Excalidraw
    const { Excalidraw, exportToSvg } = window.ExcalidrawLib;
    const excalidrawAPI = await Excalidraw.init({
        container: app,
        width: '100%',
        height: '600px'
    });

    // 添加导出按钮
    const exportBtn = document.createElement('button');
    exportBtn.textContent = '导出为SVG';
    exportBtn.style.margin = '10px';
    exportBtn.style.padding = '8px 16px';
    app.prepend(exportBtn);

    // 导出功能
    exportBtn.addEventListener('click', async () => {
        const elements = excalidrawAPI.getSceneElements();
        const svg = await exportToSvg({
            elements,
            appState: {
                exportEmbedScene: true,
                exportWithDarkMode: false
            }
        });
        
        const preview = document.createElement('div');
        preview.innerHTML = svg.outerHTML;
        preview.style.marginTop = '20px';
        app.appendChild(preview);
    });

    console.log('Excalidraw初始化完成');
});