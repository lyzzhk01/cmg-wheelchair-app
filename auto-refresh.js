// 自动刷新脚本
(function() {
    // 上次文件修改时间
    let lastModified = '';
    
    // 检查文件是否有变化
    function checkForChanges() {
        fetch(window.location.href, { method: 'HEAD' })
            .then(response => {
                const currentModified = response.headers.get('last-modified');
                if (lastModified && lastModified !== currentModified) {
                    console.log('检测到文件变化，正在刷新页面...');
                    window.location.reload();
                }
                lastModified = currentModified;
            })
            .catch(error => console.error('刷新检查失败:', error));
    }
    
    // 创建刷新状态指示器
    function createRefreshIndicator() {
        const indicator = document.createElement('div');
        indicator.style.position = 'fixed';
        indicator.style.bottom = '70px';
        indicator.style.right = '10px';
        indicator.style.backgroundColor = 'rgba(59, 130, 246, 0.7)';
        indicator.style.color = 'white';
        indicator.style.padding = '5px 10px';
        indicator.style.borderRadius = '15px';
        indicator.style.fontSize = '12px';
        indicator.style.zIndex = '9999';
        indicator.style.display = 'flex';
        indicator.style.alignItems = 'center';
        indicator.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // 添加自动刷新图标
        indicator.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1" style="margin-right:5px;">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
            </svg>
            <span>自动刷新已启用</span>
        `;
        
        document.body.appendChild(indicator);
    }
    
    // 初始化
    function init() {
        // 首次获取修改时间
        fetch(window.location.href, { method: 'HEAD' })
            .then(response => {
                lastModified = response.headers.get('last-modified');
                console.log('自动刷新已启用，初始时间：', lastModified);
                
                // 创建状态指示器
                createRefreshIndicator();
                
                // 每2秒检查一次文件变化
                setInterval(checkForChanges, 2000);
            });
    }
    
    // 页面加载完成后初始化
    window.addEventListener('load', init);
})(); 