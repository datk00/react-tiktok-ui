import * as request from '../utils/request';

const endpoint = '/search/general/preview/';

const params = {
    // WebIdLastTime: '1735997284',
    aid: '1988',
    app_language: 'en',
    app_name: 'tiktok_web',
    browser_language: 'en',
    browser_name: 'Mozilla',
    browser_online: 'true',
    browser_platform: 'Win32',
    browser_version:
        '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
    channel: 'tiktok_web',
    cookie_enabled: 'true',
    data_collection_enabled: 'true',
    device_id: '7456051511107388935',
    device_platform: 'web_pc',
    focus_state: 'true',
    from_page: 'user',
    history_len: '9',
    is_fullscreen: 'false',
    is_page_visible: 'true',
    keyword: 'Sơn',
    odinId: '7133492259375760410',
    os: 'windows',
    priority_region: 'VN',
    referer: 'https://www.tiktok.com/@datthanh_369',
    region: 'VN',
    root_referer: 'https://www.tiktok.com/@datthanh_369',
    screen_height: '768',
    screen_width: '1366',
    tz_name: 'Asia/Saigon',
    user_is_login: 'true',
    // verifyFp: 'verify_m5l606p5_3KxQsvEU_qZbB_4ppw_AenK_ef2Yzpo3om2w',
    webcast_language: 'en',
};

const headers = {
    Accept: '*/*',
    // 'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'en',
};

const apiSearchTiktok = async (keyword) => {
    params.keyword = keyword;
    try {
        const response = await request.get('tiktok', endpoint, { params, headers });

        return response.sug_list;
    } catch (error) {
        console.log(error);
    }
};
export default apiSearchTiktok;
