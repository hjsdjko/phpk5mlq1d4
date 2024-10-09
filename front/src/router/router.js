import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import minsuleixingList from '../pages/minsuleixing/list'
import minsuleixingDetail from '../pages/minsuleixing/detail'
import minsuleixingAdd from '../pages/minsuleixing/add'
import minsuxinxiList from '../pages/minsuxinxi/list'
import minsuxinxiDetail from '../pages/minsuxinxi/detail'
import minsuxinxiAdd from '../pages/minsuxinxi/add'
import minsuyudingList from '../pages/minsuyuding/list'
import minsuyudingDetail from '../pages/minsuyuding/detail'
import minsuyudingAdd from '../pages/minsuyuding/add'
import pingjiaxinxiList from '../pages/pingjiaxinxi/list'
import pingjiaxinxiDetail from '../pages/pingjiaxinxi/detail'
import pingjiaxinxiAdd from '../pages/pingjiaxinxi/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussminsuxinxiList from '../pages/discussminsuxinxi/list'
import discussminsuxinxiDetail from '../pages/discussminsuxinxi/detail'
import discussminsuxinxiAdd from '../pages/discussminsuxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'minsuleixing',
					component: minsuleixingList
				},
				{
					path: 'minsuleixingDetail',
					component: minsuleixingDetail
				},
				{
					path: 'minsuleixingAdd',
					component: minsuleixingAdd
				},
				{
					path: 'minsuxinxi',
					component: minsuxinxiList
				},
				{
					path: 'minsuxinxiDetail',
					component: minsuxinxiDetail
				},
				{
					path: 'minsuxinxiAdd',
					component: minsuxinxiAdd
				},
				{
					path: 'minsuyuding',
					component: minsuyudingList
				},
				{
					path: 'minsuyudingDetail',
					component: minsuyudingDetail
				},
				{
					path: 'minsuyudingAdd',
					component: minsuyudingAdd
				},
				{
					path: 'pingjiaxinxi',
					component: pingjiaxinxiList
				},
				{
					path: 'pingjiaxinxiDetail',
					component: pingjiaxinxiDetail
				},
				{
					path: 'pingjiaxinxiAdd',
					component: pingjiaxinxiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussminsuxinxi',
					component: discussminsuxinxiList
				},
				{
					path: 'discussminsuxinxiDetail',
					component: discussminsuxinxiDetail
				},
				{
					path: 'discussminsuxinxiAdd',
					component: discussminsuxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
