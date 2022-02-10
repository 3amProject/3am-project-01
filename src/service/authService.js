import { customAxios } from "./customAxios";

// 로그인
export const signIn = async (user) => {
    try {
        let result = {
            error: ''
        }
        // 더 많은 에러 검열 로직 필요
        if (user.userId === '' || user.password === '') {
            result.error = '모든 정보를 입력해주세요.';
            return result;
        }
        const res = await customAxios.post('/auth/signInProc', JSON.stringify(user));
        // 토큰 받아와서 localStorage 저장
        localStorage.setItem('accessToken', res.data.data.accessToken);
        localStorage.setItem('refreshToken', res.data.data.refreshToken);
        
        // userId localStorage 저장
        localStorage.setItem('userId', user.userId);

        return res;
        
    } catch (_error) {
        console.log(_error);
        window.alert(_error);
    }
}


// 회원 가입
export const signUp = async (user, required = []) => {
    try {
        let validate = true;   
        let result = {
            error: ''
        };
    
        required.map(k => {
            if (user[k] === '' || !user[k]) {
                validate = false;
            }
        });
    
        if (!validate) {
            result.error = '모든 정보를 입력해주세요.';
            return result;
        }
        if (user.userId === user.password) {
            result.error = '아이디와 패스워드가 같습니다.';
            return result;
        }
        if (user.password !== user.password2) {
            result.error = '두 패스워드가 서로 일치하지 않습니다.';
            return result;
        }
        
        const data = await customAxios.post('/auth/signUpProc', JSON.stringify(user));
        return data;
    } catch (_error) {
        console.log(_error);
    }
}


// 로그 아웃
export const signOut = () => {
    // localStorage 토큰 제거
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // localStorage userId 제거
    localStorage.removeItem('userId');
}


// 회원 정보(마이페이지) 조회
export const getProfile = async() => {
    try {
        const res = await customAxios.get('/user/myPage');
        return await res.data.data.userInfo;
    } catch (error) {
        console.log(error);
    }
}


// 회원 정보 수정 페이지 조회
export const getProfileEdit = async() => {
    try {
        const res = await customAxios.get('/user/profile/update');
        return await res.data.data;
    } catch (error) {
        console.log(error);
    }
}


// 회원 정보 수정
export const putProfileEdit = async(user, required = []) => {
    try {
        let validate = true;   
        let result = {
            error: ''
        };
    
        required.map(k => {
            if (user[k] === '' || !user[k]) {
                validate = false;
            }
        });
    
        if (!validate) {
            result.error = '모든 정보를 입력해주세요.';
            return result;
        }

        const res = await customAxios.put('/user/profile/update', JSON.stringify(user));
        return res;

    } catch (_error) {
        console.log(_error);
    }
}