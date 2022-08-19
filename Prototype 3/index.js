import express from 'express'
import { engine }  from 'express-handlebars'

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const dbPromise = open({
	filename: 'data3.db',
	driver: sqlite3.Database
})

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded(), express.static('public'))





app.get('/', async (req, res) => {
	const db = await dbPromise;
	const werftijden = await db.all('SELECT * FROM Werftijden ORDER BY [Datum] ASC;')
	await db.run('DELETE FROM Werftijden WHERE [Datum] = "2022-08-18";')
	res.render('home', { werftijden })
})

app.post('/werven', async (req, res) => {
	const db = await dbPromise
	const datumValue = req.body.datumValue
	const werfValue = req.body.werfValue
	const beginuurValue = req.body.beginuurValue
	const einduurValue = req.body.einduurValue
	const naamValue = req.body.naamValue
	const testValue = req.body.testValue

/*
console.log('time 1', beginuurValue)
console.log('time 2', einduurValue)

console.log('time 1 split', beginuurValue.split(":"))
let bVs = beginuurValue.split(":")
console.log('bVs 1', bVs[0])
console.log('bVs 2', bVs[1])

console.log('time 1 split', einduurValue.split(":"))
let eVs = einduurValue.split(":")
console.log('eVs 1', eVs[0])
console.log('eVs 2', eVs[1])
*/

let bVs = beginuurValue.split(":")
let eVs = einduurValue.split(":")

let MV1 = eVs[1] - bVs[1]
if (MV1 < 0) {
	let MV2 = MV1 + 60
		let UV1 = eVs[0] - bVs[0]
		if (UV1 < 0) {
			let UV2 = UV1 + 24
			let UV3 = UV2 -1
			//console.log('uur vers', UV3)
				if (UV3 >= 0 && UV3 <= 9) {
					if (MV2 >= 0 && MV2 <= 9) {
						let tijd = "0" + UV3 + ":" + "0" + MV2
						console.log('tijd1: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					} else {
						let tijd = "0" + UV3 + ":" + MV2
						console.log('tijd2: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					}
				} else {
					if (MV2 >= 0 && MV2 <= 9) {
						let tijd = UV3 + ":" + "0" + MV2
						console.log('tijd3: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					} else {
						let tijd = UV3 + ":" + MV2
						console.log('tijd4: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					}
				}
		} else {
			let UV3 = UV1 -1
			//console.log('uur vers', UV3)
				if (UV3 >= 0 && UV3 <= 9) {
					if (MV2 >= 0 && MV2 <= 9) {
						let tijd = "0" + UV3 + ":" + "0" + MV2
						console.log('tijd5: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					} else {
						let tijd = "0" + UV3 + ":" + MV2
						console.log('tijd6: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					}
				} else {
					if (MV2 >= 0 && MV2 <= 9) {
						let tijd = UV3 + ":" + "0" + MV2
						console.log('tijd7: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					} else {
						let tijd = UV3 + ":" + MV2
						console.log('tijd8: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					}
				}
		}
	//console.log('min vers', MV2)
} else {
	let UV1 = eVs[0] - bVs[0]
		if (UV1 < 0) {
			let UV2 = UV1 + 24
			//console.log('uur vers', UV2)
				if (UV2 >= 0 && UV2 <= 9) {
					if (MV1 >= 0 && MV1 <= 9) {
						let tijd = "0" + UV2 + ":" + "0" + MV1
						console.log('tijd9: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					} else{
						let tijd = "0" + UV2 + ":" + MV1
						console.log('tijd10: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					}
				} else {
					if (MV1 >= 0 && MV1 <= 9) {
						let tijd = UV2 + ":" + "0" + MV1
						console.log('tijd11: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					} else {
						let tijd = UV2 + ":" + MV1
						console.log('tijd12: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					}
				}
		} else {
			//console.log('uur vers', UV1)
				if (UV1 >= 0 && UV1 <= 9) {
					if (MV1 >= 0 && MV1 <= 9) {
						let tijd = "0" + UV1 + ":" + "0" + MV1
						console.log('tijd13: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					} else{
						let tijd = "0" + UV1 + ":" + MV1
						console.log('tijd14: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					}
				} else {
					if (MV1 >= 0 && MV1 <= 9) {
						let tijd = UV1 + ":" + "0" + MV1
						console.log('tijd15: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					} else {
						let tijd = UV1 + ":" + MV1
						console.log('tijd16: ', tijd)
	await db.run('INSERT INTO Werftijden ([Datum],[Werf],[Beginuur],[Einduur],[Naam],[Uren]) VALUES (?,?,?,?,?,?);', datumValue,werfValue,beginuurValue,einduurValue,naamValue,tijd)
	res.redirect('/')
					}
				}
		}
	//console.log('min vers', MV1)
}
})

app.get('/overzicht', async (req, res) => {
	const db = await dbPromise;
	const werftijden = await db.all('SELECT * FROM Werftijden ORDER BY [Datum] ASC;')
	res.render('overzicht', { werftijden })
})

const setup = async () => {
	const db = await dbPromise
	await db.migrate()
	app.listen(9000, () => {
		console.log('listening on localhost:9000')
	})
}
setup()
