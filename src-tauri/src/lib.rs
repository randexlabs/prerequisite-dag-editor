#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .unwrap_or_else(|error| {
            eprintln!("error while running Tauri application: {error}");
            std::process::exit(1);
        });
}
