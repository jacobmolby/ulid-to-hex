# Forked from [ulid-to-hex](https://github.com/VelocityMobile/ulid-to-hex)

Due to the original package being unpublished from NPM, I have forked it to keep it available.

Since the original package was unpublished, I have published this package as `ulid-to-hex2` to avoid any conflicts. You can still use `npx ulid-to-hex` to run this package.

# ULID to HEX

May be useful if you are storing ULIDs in binary format, and your database CLI already supports querying by HEX values.

## Usage

**Parse ULID**

```bash
npx ulid-to-hex 01FCB79DXEHPQJRD8BWC6G7PVH
> 017B1674B7AE8DAF2C350BE30D03DB71
> 017b1674-b7ae-8daf-2c35-0be30d03db71
```

**Parse HEX**

```bash
npx ulid-to-hex 0x017B1674B7AE8DAF2C350BE30D03DB71
> 01FCB79DXEHPQJRD8BWC6G7PVH
> 017b1674-b7ae-8daf-2c35-0be30d03db71
```

**Parse UUID**

```bash
npx ulid-to-hex 017b1674-b7ae-8daf-2c35-0be30d03db71
> 017B1674B7AE8DAF2C350BE30D03DB71
> 01FCB79DXEHPQJRD8BWC6G7PVH
```

### Flags

If you want just one value to be returned, you can use the flags `--uuid` or `--ulid`.

Example: **Parse ULID to UUID** only

```bash
npx ulid-to-hex 01FCB79DXEHPQJRD8BWC6G7PVH --uuid
> 017b1674-b7ae-8daf-2c35-0be30d03db71
```

Example: **Parse HEX to ULID** only

```bash
npx ulid-to-hex 0x017B1674B7AE8DAF2C350BE30D03DB71 --ulid
> 01FCB79DXEHPQJRD8BWC6G7PVH
```
