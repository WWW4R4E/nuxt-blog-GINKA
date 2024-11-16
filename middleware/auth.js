export default function ({ store, redirect }) {
  const isAuthenticated = store.state.isAuthenticated;
  
  if (!isAuthenticated) {
    store.commit('setMessage', { message: '请先登录!', type: 'error' });
    return redirect('/login');
  }
}
