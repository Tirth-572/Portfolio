# PostgreSQL + pgAdmin 4 Setup

## 1. Install PostgreSQL & pgAdmin 4

Download from: https://www.postgresql.org/download/windows/  
(pgAdmin 4 is usually included in the installer)

During install, set a **password** for the `postgres` user — remember it.

## 2. Create database in pgAdmin 4

1. Open **pgAdmin 4**
2. Connect to **PostgreSQL** (enter your postgres password)
3. Right-click **Databases** → **Create** → **Database**
4. Name: `tirth_portfolio`
5. Click **Save**

## 3. Configure backend `.env`

Edit `backend/.env`:

```env
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=tirth_portfolio
PG_USER=postgres
PG_PASSWORD=YOUR_ACTUAL_PASSWORD
```

## 4. Start backend

```powershell
cd backend
npm install
npm run dev
```

You should see: `PostgreSQL connected successfully`

## 5. Test in pgAdmin 4

1. Open **tirth_portfolio** → **Schemas** → **public** → **Tables**
2. After submitting the contact form on the website, refresh — you will see the **contacts** table
3. Right-click **contacts** → **View/Edit Data** → **All Rows**

## 6. Optional — run SQL manually

Open **Query Tool** on `tirth_portfolio` and run `database/schema.sql`

## Health check

Open: http://localhost:5000/api/health  

Expected: `"database": "postgresql (connected)"`
