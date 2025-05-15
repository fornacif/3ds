export async function loadNav() {
    
    const response = await fetch(`/nav.json`);
    if (!response.ok) {
        throw new Error('Failed to fetch query index');
    }
    const result = await response.json();

    const filteredData = result.data.filter(item => 
        item.path.startsWith('/pages/')
    );
      
    filteredData.forEach(item => {
        item.path = item.path.replace('/pages', '');
    });

    return filteredData;
}

export const isAuthorMode = window.location.href.includes('.html');
