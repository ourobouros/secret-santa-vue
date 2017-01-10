import landing from './components/landing/landing.routes'
import secret from './components/secret/secret.routes'
import end from './components/end/end.routes'
import App from './App'

export default [
  { path: '/',
    component: App,
    children: [
      landing,
      secret,
      end
    ]
  },
	{ path: '*', component: App, children: [landing] }
]
