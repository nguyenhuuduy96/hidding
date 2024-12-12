import axios from 'axios';
axios.defaults.timeout = 5000;
const pre = '/dist';
const state = {
  mv: {},
  subdivisionList: [],
  projectList: [],
  leaseList: [],
  banner_qr: {},
  articles: [],
  project_pro: {},
};
const getters = {};
const actions = {
  async getData({ commit }) {
    try {
      const response = await axios.get(pre + '/data.json');
      // const data = await response.json();
      const { mv, subdivisionList, banner_qr } = response.data;
      commit('setData', {
        mv,
        subdivisionList,
        banner_qr,
      });
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    }
  },
  async getLeaseList({ commit }) {
    try {
      const response = await axios.get(pre + '/data.json');
      // const data = await response.json();
      const { leaseList } = response.data;
      commit('setLeaseList', leaseList);
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    }
  },
  async getProjectList({ commit }) {
    try {
      const response = await axios.get(pre + '/data.json');
      // const data = await response.json();
      const { projectList } = response.data;
      commit('setProjectList', projectList);
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    }
  },
  async getActicles({ commit }) {
    try {
      const response = await axios.get(pre + '/data.json');
      // const data = await response.json();
      const { articles } = response.data;
      commit('setActicles', articles);
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    }
  },
  async getProjectPro({ commit }) {
    try {
      const response = await axios.get(pre + '/data.json');
      // const data = await response.json();
      const { project_pro } = response.data;
      commit('setProjectPro', project_pro);
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    }
  },
};
const mutations = {
  setData(state, { mv, subdivisionList, banner_qr, project_pro }) {
    state.mv = mv;
    state.subdivisionList = subdivisionList;
    state.banner_qr = banner_qr;
    state.project_pro = project_pro;
  },
  setProjectList(state, projectList) {
    state.projectList = projectList;
  },
  setLeaseList(state, leaseList) {
    state.leaseList = leaseList;
  },
  setActicles(state, articles) {
    state.articles = articles;
  },
  setProjectPro(state, setProjectPro) {
    state.project_pro = setProjectPro;
  },
};
export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state,
};
