module ApplicationHelper
  def active_tab_style(controller_class)
    "bg-gray-100 dark:bg-gray-700" if controller_class == request.controller_class
  end
end
