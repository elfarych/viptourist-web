import { Notify } from 'quasar'

export default function notifier ({ message = '', color = 'dark', position = 'top' }) {
  Notify.create({
    message,
    color,
    position,
    actions: [{ color: 'white', icon: 'close' }]
  })
}
