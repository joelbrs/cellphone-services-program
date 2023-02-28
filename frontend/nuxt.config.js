import colors from 'vuetify/es5/util/colors'
import path from 'path'
import pt from 'vuetify/src/locale/pt'

export default {
	head: {
		titleTemplate: '%s',
		title: 'CellPhone System',
		htmlAttrs: {
			lang: 'pt-BR'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	css: ['~/assets/main.css'],

	plugins: [],

	buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

	modules: ['@nuxtjs/axios', '@nuxtjs/universal-storage'],

	recaptcha: {},

	storage: {
		initialState: { testParam: false },
		vuex: {
			namespace: 'storage'
		},
		cookie: {
			prefix: '',
			options: {
				path: '/'
			}
		},
		localStorage: {
			prefix: ''
		},
		ignoreExceptions: false
	},

	auth: {},

	router: {
		base: '/',
	},

	vuetify: {
		theme: {
			dark: false,
			themes: {
				light: {
					primary: '#044f6f',
					secondary: colors.grey.darken4,
					accent: colors.indigo.base,
					error: colors.red,
					info: colors.lightBlue.darken3,
					success: colors.green.accent4,
					warning: colors.yellow.darken3
				},
				dark: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			}
		},
		lang: {
			locales: { pt },
			current: 'pt'
		}
	},

	server: {
		host: '0.0.0.0'
	},

	build: {}
}
