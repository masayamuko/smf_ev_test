// JSONBin.ioを使ったデータ取得・保存の例

// 設定（実際の値に置き換えてください）
const BIN_ID = 'YOUR_BIN_ID_HERE';
const API_KEY = '$2a$10$21I4OscAL6BIpjy0Xtf9iu3RR6s0OAeL3FfXvDRXOPjrS5OeujkGu';
const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// データを取得する関数
async function fetchData() {
  try {
    const response = await fetch(`${API_URL}/latest`, {
      headers: {
        'X-Master-Key': API_KEY
      }
    });
    
    if (!response.ok) {
      throw new Error('データ取得に失敗しました');
    }
    
    const data = await response.json();
    return data.record; // JSONBin.ioは record プロパティ内にデータを格納
  } catch (error) {
    console.error('エラー:', error);
    // エラー時は空のデータを返す
    return {
      venueHopes: [],
      statusResponses: []
    };
  }
}

// データを保存する関数
async function saveData(data) {
  try {
    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('データ保存に失敗しました');
    }
    
    return true;
  } catch (error) {
    console.error('エラー:', error);
    return false;
  }
}

// 使用例：ページ読み込み時にデータを取得
async function initializeData() {
  const data = await fetchData();
  
  // 取得したデータで表示を更新
  console.log('会場希望:', data.venueHopes);
  console.log('参加状況:', data.statusResponses);
  
  // UIの更新（既存の関数を使用）
  updateVenueHopeDisplay(data.venueHopes);
  updateOverallProgress(data);
}

// 使用例：フォーム送信時にデータを保存
async function handleFormSubmitWithAPI(newData) {
  // まず現在のデータを取得
  const currentData = await fetchData();
  
  // 新しいデータを追加
  currentData.venueHopes.push(newData);
  
  // APIに保存
  const success = await saveData(currentData);
  
  if (success) {
    showNotification('データを保存しました！');
    // UIを更新
    updateVenueHopeDisplay(currentData.venueHopes);
  } else {
    showNotification('保存に失敗しました。もう一度お試しください。');
  }
}

// 定期的にデータを同期（5秒ごと）
setInterval(async () => {
  const data = await fetchData();
  updateVenueHopeDisplay(data.venueHopes);
  updateOverallProgress(data);
}, 5000);